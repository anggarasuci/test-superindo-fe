import React from "react";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { setGlobalPeriodIdUseCase } from "src/use-case/setting/set-global-period-id-use-case";
import { setGlobalTypeIdUseCase } from "src/use-case/setting/set-global-type-id-use-case";

export const GlobalFunction = () => {
  const settingStore = settingStoreImplementation();
  const setGlobalPeriod = React.useCallback(
    (id) => {
      setGlobalPeriodIdUseCase(settingStore, id);
    },
    [settingStore.globalPeriodId]
  );

  const setGlobalType = React.useCallback(
    (id) => {
      setGlobalTypeIdUseCase(settingStore, id);
    },
    [settingStore.globalTypeId]
  );

  const setDefaultHeader = () => {
    setGlobalPeriod(2);
    setGlobalType(1);
    // window.location.reload();
  };

  const setBacalegtHeader = () => {
    setGlobalPeriod(3);
    setGlobalType(4);
    // window.location.reload();
  };

  return {
    setGlobalPeriod,
    setGlobalType,
    setDefaultHeader,
    setBacalegtHeader,
  };
};
