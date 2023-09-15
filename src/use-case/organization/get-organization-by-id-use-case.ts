import { OrganizationStore } from "src/domain/store/candidate-organization-store";

const getOrganizationByIdUseCase = async (
  store: OrganizationStore,
  id: string | ""
) => {
  await store.getOrganizationById(id);
};

export { getOrganizationByIdUseCase };
