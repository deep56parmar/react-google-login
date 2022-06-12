import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const AuthService = {
    login: (data) => {
        return axios.post( apiUrl  + "/auth/google/login", data)
    }
}
