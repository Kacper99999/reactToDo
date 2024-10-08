import axios from "axios"

export const client = axios.create({
    baseURL: "https://goit-task-manager.herokuapp.com/"
});

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export {client, setAuthHeader, clearAuthHeader};