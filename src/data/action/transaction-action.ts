import { TransactionRepository } from "src/domain/repository/transaction-repository";
import { TransactionActionType } from "../action-type/transaction-action-type";
import { TransactionEntity } from "src/domain/entity/transaction-entity";

const getAction = () => async (dispatch: any) => {
  const response = await TransactionRepository.get();
  dispatch({
    type: TransactionActionType.GET,
    payload: response,
  });
  return response;
};

const getByIdAction = (id: string) => async (dispatch: any) => {
  const response = await TransactionRepository.getById(id);
  dispatch({
    type: TransactionActionType.GET_BY_ID,
    payload: response,
  });
  return response;
};

const submitAction = (request: TransactionEntity) => async (dispatch: any) => {
  const response = await TransactionRepository.submit(request);
  dispatch({
    type: TransactionActionType.SUBMIT,
    payload: response,
  });
  return response;
};

const removeAction = (id: string) => async (dispatch: any) => {
  const response = await TransactionRepository.remove(id);
  dispatch({
    type: TransactionActionType.REMOVE,
    payload: id,
  });
  return response;
};

export const TransactionAction = {
  getAction,
  getByIdAction,
  submitAction,
  removeAction,
};
