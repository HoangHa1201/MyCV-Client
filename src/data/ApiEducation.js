import axios from 'axios';

const ApiEdu = 'https://mycv-server.onrender.com/api/getAllDataEdu';

export const getAllDataEdu = async () => {
    try {
        const response = await axios.get(ApiEdu);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}