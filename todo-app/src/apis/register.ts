/* eslint-disable no-alert */
import axios from "axios";

import { axiosInstance } from "../utils";
import { addTokenToLocalStorage } from "../utils/localStorage";

interface Payload {
  email: string;
  password: string;
}

const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
};

export const signUp = async (payload: Payload): Promise<void> => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", payload);
    addTokenToLocalStorage(data);
  } catch (error) {
    alert(getErrorMessage(error));
  }
};

export const signIn = async (payload: Payload): Promise<void> => {
  try {
    const { data } = await axiosInstance.post("/auth/signin", payload);
    addTokenToLocalStorage(data);
  } catch (error) {
    alert(getErrorMessage(error));
  }
};
