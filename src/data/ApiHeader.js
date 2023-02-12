import axios from 'axios';

const ApiHeader = 'https://mycv-server.onrender.com/api/getAllDataHeader';

export const getAllDataHeader = async () => {
    try {
        const response = await axios.get(ApiHeader);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
