import { TOPIC_ENDPOINT } from "../constants/constants";
import apiCall from "../api";

export const createNewTopic = async (values) => {
    const response = await apiCall('POST', TOPIC_ENDPOINT, values);
    return response.data;
}

export const getLatestTopics = async (values) => {
    const response = await apiCall('GET', `${TOPIC_ENDPOINT}/latest`);
    return response.data;
};

export const getTopic = async (id) => {
    const response = await apiCall('GET', `${TOPIC_ENDPOINT}/${id}`);
    return response.data;
};
