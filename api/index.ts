import axios, { AxiosInstance } from 'axios';

export default class ApiInstance {
    instance: AxiosInstance;

    constructor(path: string) {
        this.instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + path,
            headers: {
                "Content-type": "application/json",
            }
        })
    }
}
