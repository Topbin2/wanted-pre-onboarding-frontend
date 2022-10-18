/* eslint-disable no-alert */
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
