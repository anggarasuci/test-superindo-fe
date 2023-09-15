import { RequestScoreEntity } from "src/domain/entity/candidate-score-entity";
import { ScoreStore } from "src/domain/store/candidate-score-store";

const submitScoreUseCase = async (
  store: ScoreStore,
  isEdit: boolean,
  id: number | null,
  period: number,
  type: number,
  dapil: number,
  candidate: number,
  scoreType: number,
  score: number,
  notes: string
) => {
  await store.submit(
    isEdit,
    createParams(id, period, type, dapil, candidate, scoreType, score, notes)
  );
};

const createParams = (
  id: number,
  period: number,
  type: number,
  dapil: number,
  candidate: number,
  scoreType: number,
  score: number,
  notes: string
): RequestScoreEntity => {
  let result: RequestScoreEntity = {
    id: id,
    period: period,
    type: type,
    dapil: dapil,
    candidate: candidate,
    score_type: scoreType,
    score: score,
    notes: notes,
  };
  return result;
};

export { submitScoreUseCase };
