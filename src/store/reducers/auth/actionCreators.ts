import { AppDispatch } from "../..";
import UserService from "../../../services/UserService";
import { TUser } from "../../../types/TUser";
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionsEnum.SET_AUTH,
        payload: auth
    }),

    setUser: (user: TUser): SetUserAction => ({
        type: AuthActionsEnum.SET_USER,
        payload: user
    }),

    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AuthActionsEnum.SET_IS_LOADING,
        payload: isLoading
    }),

    setError: (error: string | null): SetErrorAction => ({
        type: AuthActionsEnum.SET_ERROR,
        payload: error
    }),

    login: (name: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));

            setTimeout(async () => {
                const response = await UserService.getUsers();
                const user = response.data.find(user => user.name === name && user.password === password);
                if (user) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('name', user.name);
                    dispatch(AuthActionCreators.setUser(user));
                    dispatch(AuthActionCreators.setAuth(true));
                } else {
                    dispatch(AuthActionCreators.setError('Wrong username or password'))
                }

                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)
        } catch (err) {
            dispatch(AuthActionCreators.setError("Error!"));
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            dispatch(AuthActionCreators.setAuth(false));
            dispatch(AuthActionCreators.setUser({} as TUser));
            localStorage.removeItem('auth');
            localStorage.removeItem('name');
        } catch (err) {
            dispatch(AuthActionCreators.setError("Error!"));
        }
    }
}