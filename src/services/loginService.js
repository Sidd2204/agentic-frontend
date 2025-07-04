import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });

    return response;
  } catch (error) {
    // console.log("Error from login service", error.response);

    throw error.response;
  }
};
