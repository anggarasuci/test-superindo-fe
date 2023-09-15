import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { CandidateScoreActionType } from "../action-type/candidate-score-action-type";
import { RequestScoreEntity } from "src/domain/entity/candidate-score-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.candidateScore}`;

const getByCandidate = async (candidateId: number) => {
  return fetchWrapper.get(
    CandidateScoreActionType.GET_CANDIDATES_SCORE,
    `${baseUrl}?candidate=${candidateId ?? ""}`
  );
};

const submit = async (isEdit: boolean, request: RequestScoreEntity) => {
  return isEdit
    ? fetchWrapper.put(
        CandidateScoreActionType.UPDATE_CANDIDATE_SCORE,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        CandidateScoreActionType.SUBMIT_CANDIDATE_SCORE,
        `${baseUrl}`,
        request
      );
};

export const ScoreService = {
  getByCandidate,
  submit,
};
