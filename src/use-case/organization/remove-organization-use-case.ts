import { OrganizationStore } from "src/domain/store/candidate-organization-store";

const removeOrganizationUseCase = async (
  store: OrganizationStore,
  id: number
) => {
  await store.remove(id);
};

export { removeOrganizationUseCase };
