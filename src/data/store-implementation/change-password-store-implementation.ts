import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangePasswordEntity } from "src/domain/entity/change-password-entity";
import { ChangePasswordStore } from "src/domain/store/change-password-store";
import { ChangePasswordAction } from "../action/change-password-action";
import { ChangePasswordStoreState } from "../reducer/change-password-reducer";
import type { AppRootState } from "./app-store-implementation";


const changePasswordSelector = (state: AppRootState) => state.changePassword;

const changePasswordStoreImplementation = (): ChangePasswordStore => {
  const { changePasswordObject, validation, status } = useSelector<
    AppRootState,
    ChangePasswordStoreState
  >(changePasswordSelector);
  const dispatch = useDispatch();

  //overidde from store
  const changePassword = useCallback((changePasswordEntity: ChangePasswordEntity) => ChangePasswordAction.changePasswordAction(changePasswordEntity)(dispatch), [dispatch]);
  
  return {
    changePasswordObject,
    validation,
    status,
    changePassword
  };
};

export { changePasswordStoreImplementation, changePasswordSelector };
