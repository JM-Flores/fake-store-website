import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/products',
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<T>(this.endpoint, config).then(res => res.data);
    }

    get = (id: number) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
    }
}

export default APIClient;