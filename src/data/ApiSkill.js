import axios from 'axios';

const ApiSkill = 'https://mycv-server.onrender.com/api/getAllDataSkill';

export const getAllDataSkill = async () => {
    try {
        const response = await axios.get(ApiSkill);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}