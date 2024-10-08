import { TUser } from "../../../types/TUser";

export interface AuthState {
    isAuth: boolean;
    user: TUser;
    isLoading: boolean;
    error: string | null;
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface SetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: TUser;
}

export interface SetIsLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string | null;
}

export type AuthAction =
    SetAuthAction |
    SetUserAction |
    SetIsLoadingAction |
    SetErrorAction;