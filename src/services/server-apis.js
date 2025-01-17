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

export const getTutorials = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8090/api/collections/Tutorials/records"
    );
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const submitFeedback = async (payload) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8090/api/collections/Feedback/records",
      payload
    );
    console.log("response", response);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const getBlogByTutorialId = async (tutorialId) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8090/api/collections/Blogs/records?filter=Tutorial="${tutorialId}"`
    );
    console.log("response", response);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const getBlogDetailsbyBlogId = async (blogId) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8090/api/collections/Blogs/records?filter=id="${blogId}"`
    );
    console.log("response", response);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const searchBlogsByName = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8090/api/collections/Blogs/records?filter=(Point_Name~'n')`
    );
    console.log("response", response.data);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};
