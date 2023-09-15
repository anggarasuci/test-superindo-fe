import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestUserEntity } from "src/domain/entity/user-entity";
import { UserStore } from "src/domain/store/user-store";
import { UserAction } from "../action/user-action";
import { UserStoreState } from "../reducer/user-reducer";
import type { AppRootState } from "./app-store-implementation";

const userSelector = (state: AppRootState) => state.user;

const userStoreImplementation = (): UserStore => {
  const {
    users,
    validation,
    userById,
    status,
  } = useSelector<AppRootState, UserStoreState>(userSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getUsers = useCallback(
    (name?: string) =>
      UserAction.getUserAction(name)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestUserEntity) =>
      UserAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) =>
      UserAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    users,
    userById,
    validation,
    status,
    getUsers,
    submit,
    remove
  };
};

export { userStoreImplementation, userSelector };
