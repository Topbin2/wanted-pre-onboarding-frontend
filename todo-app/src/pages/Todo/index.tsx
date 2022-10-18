import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { createTodo, getTodos } from "../../apis";
import { Button, Input, TodoCard } from "../../components";
import { useValidate } from "../../hooks";
import { ITodo } from "../../types";
import { getTokenFromLocalStorage, todoValidation } from "../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  & > div:first-child {
    flex-basis: 80%;
  }

  & > button:last-child {
    flex-basis: 20%;
  }
`;

export const UList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin-top: 50px;
`;

const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoValue, todoError, todoValid, handleTodo, setTodoValue] =
    useValidate(todoValidation);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({
      todo: todoValue,
      onSuccess: () => {
        getTodos().then((data) => {
          if (data) setTodos(data);
          setTodoValue("");
        });
      },
    });
  };

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (!token) {
      navigate("/");
    }

    getTodos().then((data) => {
      if (data) setTodos(data);
    });
  }, [navigate]);

  return (
    <Container>
      <h1>ToDo</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="todo"
          value={todoValue}
          isError={todoError}
          errorMsg="공백 없이 등록해주세요."
          onChange={(e) => handleTodo(e)}
        />
        <Button disabled={!todoValid}>등록</Button>
      </Form>
      <UList>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            setTodos={setTodos}
          />
        ))}
      </UList>
    </Container>
  );
};

export default Todo;
