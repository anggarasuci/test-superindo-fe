import { RequestCandidateEntity } from "src/domain/entity/candidate-entity";
import { CandidateStore } from "src/domain/store/candidate-store";

const submitCandidateUseCase = async (
  store: CandidateStore,
  isEdit: boolean,
  id: number | null,
  name: string | "",
  gender: string | "",
  party: number | null,
  active: boolean | true,
  notes: string | ""
) => {
  await store.submit(
    isEdit,
    createParams(id, name, gender, party, active, notes)
  );
};

const createParams = (
  id: number,
  name: string,
  gender: string,
  party: number,
  active: boolean,
  notes: string
): RequestCandidateEntity => {
  let result: RequestCandidateEntity = {
    id: id,
    name: name,
    gender: gender,
    party: party,
    active: active,
    notes: notes,
  };
  return result;
};

export { submitCandidateUseCase };
