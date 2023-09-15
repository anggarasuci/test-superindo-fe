import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import imageToBase64 from "image-to-base64/browser";
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
  mapGender,
  authorizePage,
  fileToBase64,
};
