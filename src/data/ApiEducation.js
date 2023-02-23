import axios from 'axios';

const ApiEdu = 'https://hoangha-mycv-server.vercel.app/api/getAllDataEdu';

export const getAllDataEdu = async () => {
    try {
        const response = await axios.get(ApiEdu);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}