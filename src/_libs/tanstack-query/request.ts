import type {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    Method,
} from "axios";
import axios from "axios";

import { API_URL, TIME_OUT } from "@/_configs";
import type { RequireField } from "@/_types";

const baseURL = API_URL;

type ExtendedAxiosInstance = AxiosInstance & {
    setToken: (token: string) => void;
};

export const axiosClient = axios.create({
    baseURL,
    timeout: TIME_OUT,
    timeoutErrorMessage: "🚧🚧🚧 Server connection time out !",
    headers: {
        accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",

        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        responseEncoding: "utf8",
        responseType: "json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Access-Control-Allow-Origin": "*",
        "X-Application": "web app",
        "X-Version": "1.0.1",
    },
}) as ExtendedAxiosInstance;

axiosClient.setToken = (token: string) => {
    axiosClient.defaults.headers.Authorization = token;
};

interface OptionsRequest<TDataRequest>
    extends RequireField<AxiosRequestConfig<TDataRequest>, "url"> {
    method: Method;
}

export const request = async <
    TDataRequest = any,
    TDataResponse = any,
    TDataError = any,
>(
    options: OptionsRequest<TDataRequest>
) => {
    const onSuccess = (response: AxiosResponse<TDataResponse>) => {
        return {
            ...response.data,
            statusCode: response.status,
        };
    };

    const onError = (error: AxiosError<TDataError>) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
            ...error.response?.data,
            statusCode: error.response?.status,
        });
    };

    return axiosClient({ ...options })
        .then(onSuccess)
        .catch(onError);
};
