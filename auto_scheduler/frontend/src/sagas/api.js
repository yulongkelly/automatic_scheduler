import axios from "axios";

const API_URL = "http://0.0.0.0:8000";

export const fetchSignup = async (body, config) => {
  try {
    const response = await axios.post(`${API_URL}/auth/users/`, body, config);
    return response;
  } catch (e) {
    throw e.response.data;
  }
};

export const fetchLogin = async (body, config) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/jwt/create/`,
      body,
      config
    );
    return response;
  } catch (e) {
    throw e.response.data;
  }
};

export const fetchLoadUser = async (config) => {
  try {
    const response = await axios.get(`${API_URL}/auth/users/me/`, config);
    return response;
  } catch (e) {
    throw e.response.data;
  }
};

export const fetchActivate = async (body, config) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/users/activation/`,
      body,
      config
    );
    return response;
  } catch (e) {
    throw e.response.data;
  }
};

export const fetchAuthenticate = async (body, config) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/jwt/verify/`,
      body,
      config
    );
    return response;
  } catch(e) {
    // console.log(e)
    throw e.response.data
  }
}
