import axios from 'axios';

const ApiImg = 'https://mycv-server.onrender.com/api/getAllDataImg';

export const getAllDataImg = async () => {
    try {
        const response = await axios.get(ApiImg);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}