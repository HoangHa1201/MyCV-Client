import axios from 'axios';

const ApiExp = 'https://hoangha-mycv-server.vercel.app/api/getAllDataExp';

export const getAllDataExp = async () => {
    try {
        const response = await axios.get(ApiExp);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}