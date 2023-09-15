import { useCallback, useState } from "react";
import { menuStoreImplementation } from "src/data/store-implementation/menu-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { MenuEntity } from "src/domain/entity/menu-entity";
import { getMenuUseCase } from "src/use-case/menu/get-menu-use-case";
import { removeMenuUseCase } from "src/use-case/menu/remove-menu-use-case";
import { submitMenuUseCase } from "src/use-case/menu/submit-menu-use-case";

const MenuViewModel = () => {
  const menuStore = menuStoreImplementation();
  const settingStore = settingStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const onSearchClicked = useCallback(
    async (name?: string) => {
      await getMenuUseCase(menuStore, name ?? "");
    },
    [menuStore]
  );

  const onSubmitClicked = useCallback(
    async (
      isEdit: boolean,
      id: number,
      seq: number,
      name: string,
      url: string,
      icon: string,
      parent: MenuEntity,
      parent_id: string
    ) => {
      await submitMenuUseCase(
        menuStore,
        isEdit,
        id,
        seq,
        name,
        url,
        icon,
        parseInt(parent_id)
      );
      setShowAlert(true);
      await getMenuUseCase(menuStore, "");
    },
    [menuStore]
  );

  const onRemoveClicked = useCallback(
    async (id: number) => {
      await removeMenuUseCase(menuStore, id);
      setShowAlert(true);
      await getMenuUseCase(menuStore, "");
    },
    [menuStore]
  );

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  const onGetMenu = useCallback(
    async (name?: string) => {
      await getMenuUseCase(menuStore, name ?? "");
    },
    [menuStore]
  );

  return {
    isShowAlert: showAlert,
    isLoading: settingStore.isLoading,
    menus: menuStore.menus,
    status: menuStore.status,
    onSearchClicked,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
    onGetMenu,
  };
};

export default MenuViewModel;
