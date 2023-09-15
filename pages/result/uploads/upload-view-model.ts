import { useCallback, useEffect, useState } from "react";
import { initStoreImplementation } from "src/data/store-implementation/init-store-implementation";
import { resultStoreImplementation } from "src/data/store-implementation/result-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { UploadDataEntity } from "src/domain/entity/upload-entity";
import { isResponseSuccess } from "src/helpers/map-response";
import { syncDataUseCase } from "src/use-case/result/sync-data-use-case";
import { uploadUseCase } from "src/use-case/result/upload-use-case";
import { removeItemMapResultAllTypeUseCase } from "src/use-case/setting/remove-item-map-result-all-type-use-case";

const UploadViewModel = () => {
  const resultStore = resultStoreImplementation();
  const settingStore = settingStoreImplementation();
  const initStore = initStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showWarning, setWarning] = useState<boolean>(false);
  let hasSync = false;
  let tempPeriod = "";
  let tempType = "";

  useEffect(() => {
    if (hasSync) return;
    if (isResponseSuccess(resultStore?.status?.code)) {
      removeItemMapResultAllType(tempPeriod, tempType);
      syncData();
    }
  }, [resultStore?.status?.code]);

  useEffect(() => {}, [settingStore?.isLoading]);
  useEffect(() => {}, [showAlert]);

  const onUploadClicked = useCallback(
    async (type: string, period: string, data: UploadDataEntity[]) => {
      hasSync = false;
      tempPeriod = period;
      tempType = type;
      if (!isAllFilled(type, period, data)) {
        setWarning(true);
        return;
      }
      await uploadUseCase(
        resultStore,
        (type = type),
        (period = period),
        (data = data)
      );
      setShowAlert(true);
    },
    [resultStore]
  );

  const removeItemMapResultAllType = (period: string, type: string) => {
    removeItemMapResultAllTypeUseCase(settingStore, period, type);
  };

  const isAllFilled = (
    type: string,
    period: string,
    data: UploadDataEntity[]
  ): Boolean => {
    return type != "" && period != "" && data?.length > 0;
  };

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  const onCloseWarning = useCallback(() => {
    setWarning(false);
  }, []);

  const syncData = async () => {
    hasSync = true;
    await syncDataUseCase(resultStore);
    setShowAlert(true);
  };

  return {
    isShowAlert: showAlert,
    status: resultStore?.status,
    isLoading: settingStore?.isLoading,
    periods: initStore?.periods ?? [],
    resultTypes: initStore?.types ?? [],
    validation: resultStore?.validation,
    isShowWarning: showWarning,
    onUploadClicked,
    onCloseAlert,
    onCloseWarning,
  };
};

export default UploadViewModel;
