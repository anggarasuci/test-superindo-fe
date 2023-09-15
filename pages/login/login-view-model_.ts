import { GlobalFunction } from "helper/global-function";
import { useCallback, useEffect, useState } from "react";
import { authStoreImplementation } from "src/data/store-implementation/auth-store-implementation";
import { initStoreImplementation } from "src/data/store-implementation/init-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { isResponseSuccess } from "src/helpers/map-response";
import { loginUseCase } from "src/use-case/auth/login-use-case";
import { logoutUseCase } from "src/use-case/auth/logout-use-case";
import { initPeriodsUseCase } from "src/use-case/init/init-periods-use-case";
import { initTypesUseCase } from "src/use-case/init/init-types-use-case";
import { initUserUseCase } from "src/use-case/init/init-user-use-case";
import { setGlobalPeriodIdUseCase } from "src/use-case/setting/set-global-period-id-use-case";
import { setGlobalTypeIdUseCase } from "src/use-case/setting/set-global-type-id-use-case";

const LoginViewModel_ = () => {
  const authStore = authStoreImplementation();
  const settingStore = settingStoreImplementation();
  const initStore = initStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isLogoutDone, setIsLogoutDone] = useState<boolean>(false);

  useEffect(() => {
    logoutUseCase(authStore);
    setIsLogoutDone(true);
  }, []);

  const onLoginClicked = useCallback(
    async (username: string, password: string) => {
      await loginUseCase(authStore, username, password);
      setShowAlert(true);
    },
    [authStore?.auth]
  );

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  return {
    auth: authStore?.auth,
    isShowAlert: showAlert,
    isLoading: settingStore?.isLoading,
    status: authStore?.status,
    isSuccess: showAlert && isResponseSuccess(authStore?.status?.code),
    isSuccessInit:
      initStore?.periods &&
      initStore?.types &&
      settingStore?.globalPeriodId &&
      settingStore?.globalTypeId &&
      isLogoutDone,
    onLoginClicked,
    onCloseAlert,
  };
};

export default LoginViewModel_;
