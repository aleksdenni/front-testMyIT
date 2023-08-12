import { axiosInstance} from "./instance";
import {ILoginRequest, ILoginResponse} from "./types";
import Endpoints from "./endpoints";
import { AxiosPromise } from "axios"

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    axiosInstance.post(Endpoints.AUTH.LOGIN, params)