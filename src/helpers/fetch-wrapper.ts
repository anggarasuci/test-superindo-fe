import { AuthActionType } from "src/data/action-type/auth-action-type";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { AuthRepository } from "src/domain/repository/auth-repository";
import { ResponseStatus } from "./constant/response-status";
import { Utils } from "./utils";

const auth = async (url: string, body: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
};

const get = async (
  actionType: string,
  url: string,
  callDispatch?: boolean,
  isDownload?: boolean
) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  const response = await fetch(url, requestOptions).then((value) =>
    handleResponse(value, isDownload)
  );
  if (callDispatch)
    appStoreImplementation.dispatch({ type: actionType, payload: response });
  if (response != ResponseStatus.Unauthorized) return response;
};

const download = async (actionType: string, url: string, filename: string) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  await fetch(url, requestOptions)
    .then((response) => response.blob())
    .then((blob) => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename + ".csv";
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); //afterwards we remove the element again
    });
};

const post = async (
  actionType: string,
  url: string,
  body: any,
  callDispatch?: boolean
) => {
  if (body.id == null) {
    delete body.id;
  }
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(url, requestOptions).then(handleResponse);

    if (callDispatch)
      appStoreImplementation.dispatch({ type: actionType, payload: response });
    if (response != ResponseStatus.Unauthorized) return response;
  } catch (e) {}
};

const put = async (
  actionType: string,
  url: string,
  body: any,
  callDispatch?: boolean
) => {
  delete body.id;
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions).then(handleResponse);

  if (callDispatch)
    appStoreImplementation.dispatch({ type: actionType, payload: response });
  if (response != ResponseStatus.Unauthorized) return response;
};

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async (
  actionType: string,
  url: string,
  callDispatch?: boolean
) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  const response = await fetch(url, requestOptions).then(handleResponse);

  if (callDispatch)
    appStoreImplementation.dispatch({
      type: actionType,
      payload: Utils.getIdFromApiUrl(url),
    });

  if (response != ResponseStatus.Unauthorized) return response;
};

const authHeader = (isMultipartForm?: boolean) => {
  const authStore = appStoreImplementation.getState().auth;
  const header = {
    Authorization: `Bearer ${authStore.auth?.access ?? ""}`,
  };
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const handleResponse = (response: any, isDownload?: boolean) => {
  return response.text().then((text: any) => {
    return isDownload ? text : text && JSON.parse(text);
  });
};

export const fetchWrapper = {
  auth,
  get,
  post,
  put,
  delete: _delete,
  download,
};
