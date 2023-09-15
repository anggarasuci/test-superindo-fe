import { RequestScoreEntity } from "src/domain/entity/candidate-score-entity";
import { ScoreRepository } from "src/domain/repository/candidate-score-repository";
import { CandidateScoreActionType } from "../action-type/candidate-score-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getScoreByCandidate = (candidateId: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ScoreRepository.getScoreByCandidate(candidateId);
  dispatch({
    type: CandidateScoreActionType.GET_CANDIDATES_SCORE,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const submitAction =
  (isEdit: boolean, request: RequestScoreEntity) => async (dispatch: any) => {
    const actionType = isEdit
      ? CandidateScoreActionType.UPDATE_CANDIDATE_SCORE
      : CandidateScoreActionType.SUBMIT_CANDIDATE_SCORE;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ScoreRepository.submit(isEdit, request);
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const ScoreAction = {
  getScoreByCandidate,
  submitAction,
};
