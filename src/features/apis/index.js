import axios from "axios";

const api = axios.create(
    {

//baseURL:'https://611cea207d273a0017e2f4fc.mockapi.io',
baseURL:'http://localhost:8090'
    }
);

export default api;