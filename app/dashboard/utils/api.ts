// utils/api.ts
// utils/api.ts
import axios from 'axios';

const API_URL = 'https://rabbit-go.sytes.net/report_mcs/complaint';

export const fetchQuejas = async (token: string) => {
    try {
        const response = await axios.get(API_URL, {
        headers: {
            Authorization: `${token}`,
        },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching quejas:', error);
        throw error;
    }
};

