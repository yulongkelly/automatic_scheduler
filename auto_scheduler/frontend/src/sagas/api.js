import axios from "axios";

export const fetchSignup = async (body, config) => {
  try {
    // console.log(body, config);
    // console.log(process.env.REACT_APP_API_URL);
    const response = await axios.post(
      `http://127.0.0.1:8000/auth/users/`,
      body,
      config
    );
    return response;
  } catch (e) {
    throw e.response.data;
  }
};
