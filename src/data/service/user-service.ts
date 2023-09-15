import getConfig from 'next/config';
import { RequestUserEntity } from 'src/domain/entity/user-entity';
import { Endpoint } from 'src/helpers/constant/endpoint';
import { fetchWrapper } from '../../helpers/fetch-wrapper';
import { UserActionType } from '../action-type/user-action-type';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.user}`;

const getUsers = async (
    username?: string
  ) => {
    return fetchWrapper.get(
      UserActionType.GET_ALL_USER,
      `${baseUrl}?search=${username ?? ""}`
    );
  };
  
  const getUserById = async (
    id: number
  ) => {
    return fetchWrapper.get(
      UserActionType.GET_USER_BY_ID,
      `${baseUrl}${id}/`
    );
  };
  
  const submit = async (
    isEdit: boolean,
    request: RequestUserEntity
  ) => {
    return isEdit
      ? fetchWrapper.put(
          UserActionType.UPDATE_USER,
          `${baseUrl}${request.id}/`,
          request
        )
      : fetchWrapper.post(
          UserActionType.SUBMIT_USER,
          `${baseUrl}`,
          request
        );
  };
  
  const remove = async (
    id: number
  ) => {
    return fetchWrapper.delete(
      UserActionType.REMOVE_USER,
      `${baseUrl}${id}/`
    );
  };
  
  export const UserService = {
    getUsers,
    getUserById,
    submit,
    remove
  };
