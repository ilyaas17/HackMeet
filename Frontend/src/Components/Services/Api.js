import axios from "axios";

const API_URL = "http://localhost:8070/api/";


export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}auth/signup`, userData);
    localStorage.setItem("userEmail", response.data.user.email)
    console.log(response.data.user.email); // More intuitive
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, userData);
    localStorage.setItem("userEmail", response.data.user.email)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const createHackathon = async (hackathonData) => {
  try { 
    const token = localStorage.getItem('authToken');  
    const response = await axios.post(`${API_URL}hackathon/createhackathon`, hackathonData, {
      headers: {
        Authorization: `Bearer ${token}`,   
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}


export const updateUserProfile = async (email, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}user/${email}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserProfile = async (email) => {
  try {
    const response = await axios.get(`${API_URL}user/${email}`);
    return response.data;
  } catch (error) {
    throw error.response.data;

  }
};

export const getHackathonsData = async () => {
  try {
    const response = await axios.get(`${API_URL}allhackathon/hackathonsdata`);
    return response.data;   
  } catch (error) {
    throw error.response?.data || error.message;
  }
}