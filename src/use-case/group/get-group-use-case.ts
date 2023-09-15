import { GroupStore } from "src/domain/store/group-store";

const getGroupUseCase = async (
  store: GroupStore,
  name?: string | ""
) => {
  await store.getGroups(name);
};

export { getGroupUseCase };
