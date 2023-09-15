import { UserStore } from "src/domain/store/user-store";

const getUserUseCase = async (
  store: UserStore,
  name?: string | ""
) => {
  await store.getUsers(name);
};

export { getUserUseCase };
