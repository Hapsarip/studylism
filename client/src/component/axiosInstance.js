import axios from "axios"
import { useNavigate } from "react-router-dom"

export const axiosInstance = axios.create({
  withCredentials: true
})

export const URI = "http://localhost:5000"

export const notLogin = () => {
  const navigate = useNavigate();
  navigate('/')
}
