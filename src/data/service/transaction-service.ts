import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { TransactionActionType } from "../action-type/transaction-action-type";
import { TransactionEntity } from "src/domain/entity/transaction-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.transaction}`;

const get = async () => {
  return fetchWrapper.get(TransactionActionType.GET, `${baseUrl}`);
};

const getById = async (id: String) => {
  return fetchWrapper.get(TransactionActionType.GET_BY_ID, `${baseUrl}${id}/`);
};

const submit = async (request: TransactionEntity) => {
  return fetchWrapper.post(TransactionActionType.SUBMIT, `${baseUrl}`, request);
};

const remove = async (id: string) => {
  return fetchWrapper.delete(TransactionActionType.REMOVE, `${baseUrl}${id}/`);
};

export const TransactionService = {
  get,
  getById,
  submit,
  remove,
};
