import apiCall from "../api";
import {POST_ENDPOINT} from "../constants/constants";

export const getPostsInTopic = async (id) => {
    const response = await apiCall('GET', `${POST_ENDPOINT}/topic/${id}`);
    return response.data;
};
