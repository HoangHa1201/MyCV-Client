import axios from 'axios';

const ApiExp = 'https://mycv-server.onrender.com/api/getAllDataExp';

export const getAllDataExp = async () => {
    try {
        const response = await axios.get(ApiExp);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}