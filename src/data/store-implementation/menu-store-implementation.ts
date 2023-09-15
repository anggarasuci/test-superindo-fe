import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestMenuEntity } from "src/domain/entity/menu-entity";
import { MenuStore } from "src/domain/store/menu-store";
import { MenuAction } from "../action/menu-action";
import { MenuStoreState } from "../reducer/menu-reducer";
import type { AppRootState } from "./app-store-implementation";

const menuSelector = (state: AppRootState) => state.menu;

const menuStoreImplementation = (): MenuStore => {
  const {
    menus,
    validation,
    menuById,
    status,
  } = useSelector<AppRootState, MenuStoreState>(menuSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getMenus = useCallback(
    (name?: string) =>
      MenuAction.getMenuAction(name)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestMenuEntity) =>
      MenuAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) =>
      MenuAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    menus,
    menuById,
    validation,
    status,
    getMenus,
    submit,
    remove
  };
};

export { menuStoreImplementation, menuSelector };
