import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestGroupEntity } from "src/domain/entity/group-entity";
import { GroupStore } from "src/domain/store/group-store";
import { GroupAction } from "../action/group-action";
import { GroupStoreState } from "../reducer/group-reducer";
import type { AppRootState } from "./app-store-implementation";

const groupSelector = (state: AppRootState) => state.group;

const groupStoreImplementation = (): GroupStore => {
  const {
    groups,
    validation,
    groupById,
    status,
  } = useSelector<AppRootState, GroupStoreState>(groupSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getGroups = useCallback(
    (name?: string) =>
      GroupAction.getGroupAction(name)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestGroupEntity) =>
      GroupAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) =>
      GroupAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    groups,
    groupById,
    validation,
    status,
    getGroups,
    submit,
    remove
  };
};

export { groupStoreImplementation, groupSelector };
