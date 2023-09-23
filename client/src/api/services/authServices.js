import { AUTH_ENDPOINT } from "../constants/constants";
import apiCall from "../api";

export const checkCredentials = async (values) => {
    const response = await apiCall('POST', `${AUTH_ENDPOINT}/login`, values);
    return response.data;
};
