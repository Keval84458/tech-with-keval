"use server";

import axios from "axios";

export const signUp = async (payload) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8090/api/collections/users/records",
      payload
    );
    console.log("response", response);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const login = async (payload) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8090/api/collections/users/auth-with-password",
      payload
    );
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};
