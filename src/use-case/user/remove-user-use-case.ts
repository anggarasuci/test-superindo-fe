import { UserStore } from "src/domain/store/user-store";

const removeUserUseCase = async (
  store: UserStore,
  id: number
) => {
  await store.remove(id);
};

export { removeUserUseCase };
