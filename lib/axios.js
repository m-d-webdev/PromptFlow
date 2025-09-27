import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
console.log({ BACKEND_URL });

const API = axios.create({
    baseURL: BACKEND_URL
});

export default API