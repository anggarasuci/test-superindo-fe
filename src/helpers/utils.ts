import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import imageToBase64 from "image-to-base64/browser";
import { SettingActionType } from "src/data/action-type/setting-action-type";
import Router from "next/router";

const getIdFromApiUrl = (url: string) => {
  const result = url.slice(0 - 1);
  const parts = result.split("/");
  return parts[parts.length - 1];
};

const isLoggedIn = () => {
  const authState = appStoreImplementation.getState().auth;
  return authState.auth?.access ?? false;
};

const getAuthState = () => {
  const authState = appStoreImplementation.getState().auth;
  return authState;
};

const authorizePage = async (currentUrl) => {
  const initState = appStoreImplementation.getState().init;
  const menuAllowed = initState?.menus?.map((menu) => menu.url);

  if (menuAllowed?.indexOf(currentUrl) === -1) {
    Router.push("/unauthorized");
  }
};

const getPropertyName = (obj: Object, exp: any) => {
  let res = {};
  Object.keys(obj).map((k) => {
    res[k] = () => k;
    return k;
  });
  return exp(res)();
};

const convertImageToBase64 = async (url: string) => {
  appStoreImplementation.dispatch({
    type: SettingActionType.SET_LOADING,
    isLoading: true,
  });
  return await imageToBase64(url) // Image URL
    .then((response: any) => {
      appStoreImplementation.dispatch({
        type: SettingActionType.SET_LOADING,
        isLoading: false,
      });
      return response; // "iVBORw0KGgoAAAANSwCAIA..."
    })
    .catch((error) => {
      appStoreImplementation.dispatch({
        type: SettingActionType.SET_LOADING,
        isLoading: false,
      });
      console.log(error); // Logs an error if there was one
      return "";
    });
};

const fileToBase64 = (file, callBack) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callBack(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
};

const mapGender = (value: string) => {
  return value == "L" ? "M" : value == "P" ? "F" : value;
};

export const Utils = {
  getIdFromApiUrl,
  isLoggedIn,
  getAuthState,
  getPropertyName,
  convertImageToBase64,
  mapGender,
  authorizePage,
  fileToBase64,
};
