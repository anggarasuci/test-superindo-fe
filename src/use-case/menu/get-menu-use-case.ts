import { MenuStore } from "src/domain/store/menu-store";

const getMenuUseCase = async (
  store: MenuStore,
  name?: string | ""
) => {
  await store.getMenus(name);
};

export { getMenuUseCase };
