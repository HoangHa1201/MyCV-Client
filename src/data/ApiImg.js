import axios from 'axios';

const ApiImg = 'https://hoangha-mycv-server.vercel.app/api/getAllDataImg';

export const getAllDataImg = async () => {
    try {
        const response = await axios.get(ApiImg);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}