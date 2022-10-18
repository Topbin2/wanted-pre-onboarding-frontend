/* eslint-disable no-alert */
import axios from "axios";

import { axiosInstance } from "../utils";
import { addTokenToLocalStorage } from "../utils/localStorage";

interface Payload {
  body: { email: string; password: string };
  onSuccess: () => void;
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

export const signUp = async ({ body, onSuccess }: Payload): Promise<void> => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", body);
    addTokenToLocalStorage(data);
    onSuccess();
  } catch (error) {
    alert(getErrorMessage(error));
  }
};

export const signIn = async ({ body, onSuccess }: Payload): Promise<void> => {
  try {
    const { data } = await axiosInstance.post("/auth/signin", body);
    addTokenToLocalStorage(data);
    onSuccess();
  } catch (error) {
    alert(getErrorMessage(error));
  }
};
