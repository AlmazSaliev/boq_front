import axios from "axios";
import { MainSnackBar } from "../components/ui/MainSnackBar";

export const Base_URL = "http://localhost:8080"; // base

export const FileUploadingFetch = axios.create({
  baseURL: Base_URL + "/api/",
});

export const axiosInstance = axios.create({
  baseURL: Base_URL + "/api/",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (response?.status === 401 && localStorage.getItem("accessToken")) {
      MainSnackBar.warning(
        "Доступ к данным запрещен, ваши учетные данные устарели, авторизуйтесь снова!"
      );
    }
    return Promise.reject(
      (response && response.data) || "При запросе произошла ошибка"
    );
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

FileUploadingFetch.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (response?.status === 401) {
      MainSnackBar.warning(
        "Доступ к данным запрещен, ваши учетные данные устарели, авторизуйтесь снова!"
      );
    }
    return Promise.reject(
      (response && response.data) || "При запросе произошла ошибка"
    );
  }
);

FileUploadingFetch.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "multipart/form-data",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);
