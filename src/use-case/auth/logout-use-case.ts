import { AuthStore } from "src/domain/store/auth-store";

const logoutUseCase = (store: AuthStore) => {
  store.logout();
};

export { logoutUseCase };
