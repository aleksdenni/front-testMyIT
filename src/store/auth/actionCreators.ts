import {ILoginRequest} from "../../api/types";
import {loginFailure, loginStart, loginSuccess} from "./authReducer";
import {AppDispatch} from "../index";
import api from "../../api";


export const loginUser = (data: ILoginRequest) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(loginStart());
        const res = await api.auth.login(data);
        dispatch(loginSuccess(res.data.accessToken));
    } catch (e: any) {
        console.log(e);
        dispatch(loginFailure(e.message));
    }
};
