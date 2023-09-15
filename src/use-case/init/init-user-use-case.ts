import { InitStore } from "src/domain/store/init-store";

const initUserUseCase = async (
  store: InitStore,
  name: string | ""
) => {
  await store.initUser(name);
};

export { initUserUseCase };
