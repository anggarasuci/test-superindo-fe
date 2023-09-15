import { GroupStore } from "src/domain/store/group-store";

const removeGroupUseCase = async (
  store: GroupStore,
  id: number
) => {
  await store.remove(id);
};

export { removeGroupUseCase };
