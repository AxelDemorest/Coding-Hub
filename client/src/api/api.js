import axios from 'axios';
import { handleApiError } from './errors/errors';

const apiCall = async (method, endpoint, data = null, headers = null) => {
    try {
        const response = await axios({
            method,
            url: `${import.meta.env.VITE_API_HOST}${endpoint}`,
            data,
            headers,
        });

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        return handleApiError(error);
    }
};

export default apiCall;
