import  axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.7:3333' // COLOQUE O SEU IP AQUI COM A PORTA :3333 (o mesmo ip que se encontra nas devtools do expo)
});

export default api;