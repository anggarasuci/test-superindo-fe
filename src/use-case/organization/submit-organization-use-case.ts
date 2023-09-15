import { RequestOrganizationEntity } from "src/domain/entity/candidate-organization-entity";
import { OrganizationStore } from "src/domain/store/candidate-organization-store";

const submitOrganizationUseCase = async (
  store: OrganizationStore,
  isEdit: boolean,
  id: number | null,
  organization: string | "",
  position: string | "",
  year: number | null,
  candidate: number
) => {
  await store.submit(
    isEdit,
    createParams(id, organization, position, year, candidate)
  );
};

const createParams = (
  id: number,
  organization: string,
  position: string,
  year: number,
  candidate: number
): RequestOrganizationEntity => {
  let result: RequestOrganizationEntity = {
    id: id,
    organization: organization,
    position: position,
    year: year,
    candidate: candidate,
  };
  return result;
};

export { submitOrganizationUseCase };
