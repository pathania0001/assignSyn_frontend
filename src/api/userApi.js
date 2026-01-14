import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/users"
});

export const fetchUsers = () => api.get("/");
export const addUser = (data) => api.post("/", data);
export const editUser = (id, data) => api.put(`/${id}`, data);
export const removeUser = (id) => api.delete(`/${id}`);
