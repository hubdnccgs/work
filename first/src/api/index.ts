import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.0.0.114:3100/",
});

export function getListApiCall(params: number) {}
