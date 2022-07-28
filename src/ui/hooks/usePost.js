//* libraries
import axios from 'axios';

export const usePost = () => {
    const postData = async (url, payload, alerts) => {
        try {
            await axios.post(url, payload);
            alert(alerts.success);
        } catch (err) {
            alert(alerts.errorPost);
        }
    };

    return { postData };
};