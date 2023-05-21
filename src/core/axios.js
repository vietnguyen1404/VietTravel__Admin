import axios from "axios";
import _ from "lodash";

const instance = axios.create({
    baseURL: process.env.VUE_APP_HOST_API,
    timeout: 30000,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
    },
    (error) => {
        console.log(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        let status = _.get(error, "response.status", null);
        if (status && status >= 400) {
            console.log(
                "error code: " + error.response.status,
                error.response.data
            );
            return error.response;
        }

        return error;
    }
);

export default instance;
