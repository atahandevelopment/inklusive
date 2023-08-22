import Cookies from "js-cookie";
import axios from "axios";
// import eventEmitter from './events';
// import {newRefreshToken} from "../../services/auth";

const api = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:3000/api/",
  
});

// let inactivityTimer;

// const endSession = () => {
//     Cookies.remove('access_token');
//     Cookies.remove('refreshToken');
//     eventEmitter.emit('unauthorized');
// };

// const resetInactivityTimer = () => {
//     if (inactivityTimer) clearTimeout(inactivityTimer);
//     inactivityTimer = setTimeout(endSession, 15 * 60 * 1000);  // 15 dakika
// };

// const refreshTokenIntervalTime = 45 * 60 * 1000;  // 45 dakika

// export const refreshTokenAfterInterval = () => {
//     setInterval(async () => {
//         try {
//             const refreshToken = Cookies.get('refreshToken');
//             if (refreshToken) {
//                 const { data } = await newRefreshToken({ refresh: refreshToken });
//                 Cookies.set('access_token', data.access);
//             }
//         } catch (error) {
//             console.error('Token yenileme hatası:', error);
//         }
//     }, refreshTokenIntervalTime);
// };


api.interceptors.request.use(
    async (config) => {
        const accessToken = Cookies.get('access_token');

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        // resetInactivityTimer();  // Her istek için hareketsizlik zamanlayıcısını sıfırlayın
        // document.addEventListener('mousemove', resetInactivityTimer);
        // document.addEventListener('mousedown', resetInactivityTimer);
        // document.addEventListener('keypress', resetInactivityTimer);
        // document.addEventListener('touchmove', resetInactivityTimer);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Cookies.remove('access_token');
            // Cookies.remove('refreshToken');
            // eventEmitter.emit('unauthorized');
            return new Promise(() => {});
        }
        return Promise.reject(error);
    }
);

export default api;
