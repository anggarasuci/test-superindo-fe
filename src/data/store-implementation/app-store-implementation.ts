import { removeCookies } from "cookies-next";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { AuthActionType } from "../action-type/auth-action-type";
import { authReducer } from "../reducer/auth-reducer";
import { basedapilReducer } from "../reducer/base-dapil-reducer";
import { documentTypeReducer } from "../reducer/document-type-reducer";
import { experienceReducer } from "../reducer/candidate-experience-reducer";
import { organizationReducer } from "../reducer/candidate-organization-reducer";
import { candidateReducer } from "../reducer/candidate-reducer";
import { scoreReducer } from "../reducer/candidate-score-reducer";
import { changePasswordReducer } from "../reducer/change-password-reducer";
import { dapilReducer } from "../reducer/dapil-reducer";
import { groupReducer } from "../reducer/group-reducer";
import { GroupSurveyReducer } from "../reducer/group-survey-reducer";
import { initReducer } from "../reducer/init-reducer";
import { locationReducer } from "../reducer/location-reducers";
import { MappingGroupSurveyReducer } from "../reducer/mapping-group-survey-reducer";
import { menuReducer } from "../reducer/menu-reducer";
import { partyReducer } from "../reducer/party-reducer";
import { periodReducer } from "../reducer/period-reducer";
import { resultDapilReducer } from "../reducer/result-dapil-reducer";
import { resultProvinceReducer } from "../reducer/result-province-reducer";
import { resultReducer } from "../reducer/result-reducer";
import { resultRegencyReducer } from "../reducer/result-regency-reducer";
import { resultSurveyReducer } from "../reducer/result-survey-reducer";
import { resultWinnerReducer } from "../reducer/result-winner-reducer";
import { scoreTypeReducer } from "../reducer/score-type-reducer";
import { settingReducer } from "../reducer/setting-reducer";
import { productCategoryReducer } from "../reducer/product-category-reducer";
import { surveyReducer } from "../reducer/survey-reducer";
import { typeReducer } from "../reducer/type-reducer";
import { uploadSurveysReducer } from "../reducer/upload-surveys-reducer";
import { userReducer } from "../reducer/user-reducer";
import { candidateDocumentReducer } from "../reducer/candidate-document-reducer";
import { transactionReducer } from "../reducer/transaction-reducer";

const rootReducer = combineReducers({
  setting: settingReducer,
  user: userReducer,
  auth: authReducer,
  init: initReducer,
  location: locationReducer,
  candidate: candidateReducer,
  party: partyReducer,
  group: groupReducer,
  menu: menuReducer,
  basedapil: basedapilReducer,
  dapil: dapilReducer,
  period: periodReducer,
  type: typeReducer,
  scoreType: scoreTypeReducer,
  documentType: documentTypeReducer,
  result: resultReducer,
  resultProvince: resultProvinceReducer,
  resultRegency: resultRegencyReducer,
  resultDapil: resultDapilReducer,
  resultWinner: resultWinnerReducer,
  changePassword: changePasswordReducer,
  productCategory: productCategoryReducer,
  resultSurvey: resultSurveyReducer,
  survey: surveyReducer,
  uploadSurveys: uploadSurveysReducer,
  groupSurveys: GroupSurveyReducer,
  mappingGroupSurveys: MappingGroupSurveyReducer,
  experience: experienceReducer,
  organization: organizationReducer,
  score: scoreReducer,
  candidateDocument: candidateDocumentReducer,
  transaction: transactionReducer,
});

const rootActionReducers = (state, action: AnyAction) => {
  if (action.type === AuthActionType.LOGOUT) {
    storage.removeItem("persist:root");
    removeCookies("token");
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    "setting",
    "auth",
    "init",
    "user",
    "location",
    "party",
    "group",
    "menu",
    "candidate",
    "basedapil",
    "dapil",
    "period",
    "type",
    "score_type",
    "document_type",
    "result",
    "productCategory",
    "transaction",
  ],
};
// const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer(persistConfig, rootActionReducers);

const appStoreImplementation = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

const appPersistor = persistStore(appStoreImplementation);

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation, appPersistor };
export type { AppRootState };
