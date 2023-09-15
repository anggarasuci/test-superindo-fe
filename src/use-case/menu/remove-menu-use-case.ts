import { MenuStore } from "src/domain/store/menu-store";

const removeMenuUseCase = async (
  store: MenuStore,
  id: number
) => {
  await store.remove(id);
};

export { removeMenuUseCase };
