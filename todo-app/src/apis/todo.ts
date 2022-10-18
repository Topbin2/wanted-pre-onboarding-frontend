/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import { ITodo } from "../types";
import { authHeader, axiosInstance } from "../utils";
import { getErrorMessage } from "../utils/errorHandler";

interface CreateTodoPayload {
  todo: string;
  onSuccess?: () => void;
}

export const createTodo = async ({
  todo,
}: CreateTodoPayload): Promise<void> => {
  try {
    await axiosInstance.post("/todos", { todo }, authHeader());
  } catch (error) {
    alert(getErrorMessage(error));
  }
};

export const getTodos = async (): Promise<ITodo[] | undefined> => {
  try {
    const { data } = await axiosInstance.get("/todos", authHeader());
    return data;
  } catch (error) {
    alert(getErrorMessage(error));
  }
};
