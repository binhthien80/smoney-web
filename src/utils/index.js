import axios from 'axios';
import { getSESSION, removeSESSION, SESSION_NAME } from './session';
import { SERVER_ROOT } from "./config";


const webservices = axios.create({
    baseURL: SERVER_ROOT,
    headers: {
        "Content-Type": "application/json",
    }
});

webservices.interceptors.request.use(
    function(config) {
        let token = getSESSION(SESSION_NAME.token);
        if (token) {
            if (config.method !== "OPTIONS") {
                config.headers.authorization = "Token " + token;
                config.headers["X-CSRFTOKEN"] = token;
            }
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    },
);
// TODO: handle response status
webservices.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response.status === 403) {
            removeSESSION(SESSION_NAME, true);
            // Router.push("/login")
        }
        return Promise.reject(error);
    },
);
export default webservices;
