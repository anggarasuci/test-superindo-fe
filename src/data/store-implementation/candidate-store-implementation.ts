import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestCandidateEntity } from "src/domain/entity/candidate-entity";
import { CandidateStore } from "src/domain/store/candidate-store";
import { CandidateAction } from "../action/candidate-action";
import { CandidateStoreState } from "../reducer/candidate-reducer";
import type { AppRootState } from "./app-store-implementation";

const candidateSelector = (state: AppRootState) => state.candidate;

const candidateStoreImplementation = (): CandidateStore => {
  const {
    candidates,
    validation,
    candidate,
    contentDownload,
    contentPhoto,
    status,
  } = useSelector<AppRootState, CandidateStoreState>(candidateSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getCandidates = useCallback(
    (name?: string) => CandidateAction.getCandidateAction(name)(dispatch),
    [dispatch]
  );

  const getCandidateByParty = useCallback(
    (partyId: string, candidateName: string) =>
      CandidateAction.getCandidateByPartyAction(
        partyId,
        candidateName
      )(dispatch),
    [dispatch]
  );

  const getCandidateById = useCallback(
    (id: string) => CandidateAction.getCandidateByIdAction(id)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestCandidateEntity) =>
      CandidateAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) => CandidateAction.removeAction(id)(dispatch),
    [dispatch]
  );

  const downloadCandidate = useCallback(
    () => CandidateAction.downloadCandidate()(dispatch),
    [dispatch]
  );

  const uploadPhotoCandidate = useCallback(
    (candidateId: number, image: string) =>
      CandidateAction.uploadPhotoCandidateAction(candidateId, image)(dispatch),
    [dispatch]
  );

  return {
    candidates,
    candidate,
    validation,
    status,
    contentDownload,
    contentPhoto,
    uploadPhotoCandidate,
    downloadCandidate,
    getCandidates,
    getCandidateById,
    getCandidateByParty,
    submit,
    remove,
  };
};

export { candidateStoreImplementation, candidateSelector };
