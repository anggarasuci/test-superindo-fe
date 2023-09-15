import { InitRepository } from "src/domain/repository/init-repository";
import { InitActionType } from "../action-type/init-action-type";

const initPeriodsAction = (name?: string) => async (dispatch: any) => {
    const response = await InitRepository.initPeriods(
        name
    );
    dispatch({
        type: InitActionType.INIT_PERIODS,
        payload: response,
    });
    return response;
};

const initTypesAction = (name?: string) => async (dispatch: any) => {
    const response = await InitRepository.initTypes(
        name
    );
    dispatch({
        type: InitActionType.INIT_TYPES,
        payload: response,
    });
    return response;
};

const initUserAction = (name?: string) => async (dispatch: any) => {
    const response = await InitRepository.initUser(
        name
    );
    dispatch({
        type: InitActionType.INIT_USER,
        payload: response,
    });
    return response;    
};

const setPeriodId = (id: number) => async (dispatch: any) => {
    const response = await InitRepository.setPeriodId(id);
    dispatch({
        type: InitActionType.SET_PERIOD_ID,
        payload: response,
    });
    return response;
}

const setTypeId = (id: number) => async (dispatch: any) => {
    const response = await InitRepository.setTypeId(id);
    dispatch({
        type: InitActionType.SET_TYPE_ID,
        payload: response,
    });
    return response;
}

export const InitAction = { initPeriodsAction, initTypesAction, initUserAction, setPeriodId, setTypeId };
