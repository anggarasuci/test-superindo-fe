import { useCallback } from "react";
import { changePasswordStoreImplementation } from "src/data/store-implementation/change-password-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { changePasswordUseCase } from "src/use-case/change-password/change-password-use-case";

const ChangePasswordViewModel = () => {
  const changePasswordStore = changePasswordStoreImplementation();
  const settingStore = settingStoreImplementation();

  const onSubmitClicked = useCallback(
    async (
      oldPassword: string,
      newPassword: string,
      newPasswordConfirm: string
    ) => {
      await changePasswordUseCase(
        changePasswordStore,
        oldPassword,
        newPassword,
        newPasswordConfirm
      );
    },
    [changePasswordStore]
  );

  return {
    changePasswordObject: changePasswordStore,
    isLoading: settingStore.isLoading,
    onSubmitClicked,
  };
};

export default ChangePasswordViewModel;
