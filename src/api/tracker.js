import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: 'https://2c98-5-2-209-123.ngrok-free.app'
});

instance.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (err) => {
        console.log('[instance.interceptors.request.use]--------------------', err);
        return Promise.reject(err);
    }
);

export default instance;
