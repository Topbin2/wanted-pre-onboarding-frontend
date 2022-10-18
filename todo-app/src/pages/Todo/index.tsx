import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button, Input, TodoCard } from "../../components";
import { useValidate } from "../../hooks";
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
  const [todoValue, todoError, todoValid, handleTodo] =
    useValidate(todoValidation);

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container>
      <h1>ToDo</h1>
      <Form>
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
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </UList>
    </Container>
  );
};

export default Todo;
