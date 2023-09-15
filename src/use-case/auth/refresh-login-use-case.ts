import { AuthStore } from "src/domain/store/auth-store";

const refreshLoginUseCase = async (store: AuthStore, refreshToken: string) => {
  await store.authRefreshToken(refreshToken);
};

export { refreshLoginUseCase };
