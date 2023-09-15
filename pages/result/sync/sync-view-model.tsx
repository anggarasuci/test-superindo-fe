import { useCallback, useEffect, useState } from "react";
import { resultStoreImplementation } from "src/data/store-implementation/result-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { syncDataUseCase } from "src/use-case/result/sync-data-use-case";

const SyncViewModel = () => {
  const resultStore = resultStoreImplementation();
  const settingStore = settingStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {}, [settingStore?.isLoading]);
  useEffect(() => {}, [showAlert]);

  const onSyncClicked = useCallback(async () => {
    await syncDataUseCase(resultStore);
    setShowAlert(true);
  }, []);

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  return {
    isShowAlert: showAlert,
    isLoading: settingStore?.isLoading,
    validation: resultStore?.validation,
    status: resultStore?.status,
    onSyncClicked,
    onCloseAlert,
  };
};

export default SyncViewModel;
