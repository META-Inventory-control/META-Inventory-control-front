import axios from "axios"

const api = axios.create({
    baseURL: "https://meta-inventory-control-app-production.up.railway.app/api",
    timeout: 8000
})

export default api