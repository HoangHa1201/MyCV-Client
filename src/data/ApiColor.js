import axios from 'axios';

const ApiColor = 'https://hoangha-mycv-server.vercel.app/api/getAllDataColor';

export const getAllDataColor = async () => {
    try {
        const response = await axios.get(ApiColor);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
