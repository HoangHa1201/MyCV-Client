import axios from 'axios';

const ApiAbout = 'https://mycv-server.onrender.com/api/getAllDataAbout';

export const getAllDataAbout = async () => {
    try {
        const response = await axios.get(ApiAbout);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}