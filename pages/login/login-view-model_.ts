import { useCallback, useEffect, useState } from "react";
import { authStoreImplementation } from "src/data/store-implementation/auth-store-implementation";
import { isResponseSuccess } from "src/helpers/map-response";
import { loginUseCase } from "src/use-case/auth/login-use-case";
import { logoutUseCase } from "src/use-case/auth/logout-use-case";

const LoginViewModel_ = () => {
  const authStore = authStoreImplementation();
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
    status: authStore?.status,
    isSuccess: showAlert && isResponseSuccess(authStore?.status?.code),
    isSuccessInit: isLogoutDone,
    onLoginClicked,
    onCloseAlert,
  };
};

export default LoginViewModel_;
