import { TypeStore } from "src/domain/store/type-store";

const getTypeUseCase = async (
  store: TypeStore,
  name?: string | ""
) => {
  await store.getTypes(name);
};

export { getTypeUseCase };
