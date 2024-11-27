// frontend/src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:8070/api/auth/";
const API_URL1 = "http://localhost:8070/api/hackathon/";

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

export const createHackathon = async (hackathonData) => {
  try { 
    const token = localStorage.getItem('authToken');  
    const response = await axios.post(API_URL1, hackathonData, {
      headers: {
        Authorization: `Bearer ${token}`,   
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};