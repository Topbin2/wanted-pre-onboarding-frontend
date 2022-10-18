/* eslint-disable camelcase */
import { Token } from "../types";

export const addTokenToLocalStorage = (token: Token) => {
  const { access_token } = token;
  localStorage.setItem("access_token", JSON.stringify(access_token));
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("access_token");
};

export const getTokenFromLocalStorage = (): null | Token => {
  const result = localStorage.getItem("access_token");
  const token = result ? JSON.parse(result) : null;
  return token;
};
