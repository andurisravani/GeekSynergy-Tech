import axios from "axios"
import {ApiPaths} from "./api-constants"

const {BASE_URL} = ApiPaths

export const BaseAxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Cache-Control": "no-cache"
  }
})