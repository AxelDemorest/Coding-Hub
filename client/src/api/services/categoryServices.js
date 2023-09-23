import apiCall from "../api";
import { CATEGORY_ENDPOINT } from "../constants/constants";

export const getCategories = async () => {
    const response = await apiCall('GET', CATEGORY_ENDPOINT);
    return response.data;
};
