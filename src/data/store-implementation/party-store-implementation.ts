import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestPartyEntity } from "src/domain/entity/party-entity";
import { PartyStore } from "src/domain/store/party-store";
import { PartyAction } from "../action/party-action";
import { PartyStoreState } from "../reducer/party-reducer";
import type { AppRootState } from "./app-store-implementation";

const partySelector = (state: AppRootState) => state.party;

const partyStoreImplementation = (): PartyStore => {
  const {
    parties,
    validation,
    partyById,
    status,
  } = useSelector<AppRootState, PartyStoreState>(partySelector);
  const dispatch = useDispatch();

  //overidde from store
  const getParties = useCallback(
    (name?: string) =>
      PartyAction.getPartyAction(name)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestPartyEntity) =>
      PartyAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) =>
      PartyAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    parties,
    partyById,
    validation,
    status,
    getParties,
    submit,
    remove
  };
};

export { partyStoreImplementation, partySelector };
