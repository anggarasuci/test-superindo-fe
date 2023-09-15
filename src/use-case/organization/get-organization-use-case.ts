import { OrganizationStore } from "src/domain/store/candidate-organization-store";

const getOrganizationsUseCase = async (
  store: OrganizationStore,
  name?: string | ""
) => {
  await store.getOrganizations(name);
};

export { getOrganizationsUseCase };
