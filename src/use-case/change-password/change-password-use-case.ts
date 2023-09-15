import { ChangePasswordEntity } from "src/domain/entity/change-password-entity";
import { ChangePasswordStore } from "src/domain/store/change-password-store";

const changePasswordUseCase = async (
  store: ChangePasswordStore,
  old_password: string,
  new_password: string,
  new_password_confirm: string,
) => {
  await store.changePassword(createParams(old_password, new_password, new_password_confirm));
};

const createParams = (oldPassword: string, newPassword: string, newPasswordConfirm: string): ChangePasswordEntity => {
  let result: ChangePasswordEntity = {
    old_password: oldPassword,
    new_password: newPassword,
    new_password_confirm: newPasswordConfirm
  };
  return result;
};

export { changePasswordUseCase };
