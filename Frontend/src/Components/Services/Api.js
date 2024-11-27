// frontend/src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:8070/api/auth/";

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
