import BackendConfig from "./backend_config"
const axios = require("axios")

const baseAxios = axios.create({
  baseURL: BackendConfig.baseURL,
  timeout: 30000,
  // timeout: Math.floor(Math.random() * 5000 + 1000)
  headers: {
    'Content-Type': 'application/json'
  }
})
export default baseAxios
