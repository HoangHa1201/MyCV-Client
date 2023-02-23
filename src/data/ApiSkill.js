import axios from 'axios';

const ApiSkill = 'https://hoangha-mycv-server.vercel.app/api/getAllDataSkill';

export const getAllDataSkill = async () => {
    try {
        const response = await axios.get(ApiSkill);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}