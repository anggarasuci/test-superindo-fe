import { useCallback, useEffect, useState } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { resultDapilStoreImplementation } from "src/data/store-implementation/result-dapil-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { getDashboardUseCase } from "src/use-case/result-dapil/get-dashboard-use-case";

const DashboardViewModel = () => {
  const settingStore = settingStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();

  const [dataBar, setDataBar] = useState<any>(null);

  useEffect(() => {
    getDashboard();
  }, []);

  useEffect(() => {
    mapToDatasetBar();
    console.log("wulu ss", dataBar);
  }, [resultDapilStore?.dashboard]);

  useEffect(() => {
    console.log("wulu aa", dataBar);
  }, [dataBar]);

  const mapToDatasetBar = useCallback(() => {
    // if (!resultDapilStore?.dashboard) return;

    const documents = resultDapilStore?.dashboard?.sum_document_per_type;

    const datasets = {
      backgroundColor: documents?.map(() => "#242564"),
      borderColor: documents?.map(() => "#ffab40"),
      borderWidth: 1,
      data: documents?.map((item) => item.total_doc),
      hoverBackgroundColor: documents?.map(() => "#24256450"),
      label: "Jumlah Dokumen yang sudah di upload per type dokumen",
    };

    const result = {
      data: {
        datasets: [datasets],
        labels: documents?.map((item) => item?.doc_type),
      },
    };
    setDataBar(result);
  }, [dataBar, resultDapilStore?.dashboard]);

  const getDashboard = useCallback(() => {
    getDashboardUseCase(
      resultDapilStore,
      appStoreImplementation.getState().setting?.globalPeriodId,
      appStoreImplementation.getState().setting?.globalTypeId
    );
  }, [resultDapilStore]);
  return {
    dashboard: resultDapilStore?.dashboard,
    isLoading: settingStore?.isLoading,
    dataBar: dataBar,
  };
};

export default DashboardViewModel;
