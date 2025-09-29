import axios from "axios";
import Cookies from "js-cookie";
import { CHECK_REFRESHTOKEN } from "./auth";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const API = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Authorization: `Bearer ${Cookies.get("access_token")}`
    },
    withCredentials: true
});

// Response interceptor to handle 401 errors
API.interceptors.response.use(
    (response) => {
        // If the response is successful, just return it
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Check if the error is 401 and we haven't already tried to refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Call CHECK2 function to handle token refresh/validation
                await CHECK_REFRESHTOKEN();

                // Update the Authorization header with the new token
                const newToken = Cookies.get("access_token");
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                API.defaults.headers.Authorization = `Bearer ${newToken}`;

                // Retry the original request with the new token
                return API(originalRequest);
            } catch (refreshError) {
                // If CHECK2 fails, reject with the original error
                console.error("Token refresh failed:", refreshError);
                return Promise.reject(error);
            }
        }

        // For all other errors, just reject
        return Promise.reject(error);
    }
);

// Request interceptor to ensure fresh token on each request
API.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;