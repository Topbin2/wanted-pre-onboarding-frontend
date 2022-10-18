import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

  & > section {
    display: flex;
    align-items: center;

    & > input {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;

  & > button {
    display: flex;
    align-items: center;
    border: none;
    height: 30px;
    padding: 10px;
    border-radius: 10px;
    color: #ffffff;

    &:first-child {
      background-color: green;
    }

    &:last-child {
      background-color: red;
    }
  }
`;

const TodoCard = () => {
  return (
    <Container>
      <section>
        <input type="checkbox" checked readOnly />
        <p>리액트 공부하기</p>
      </section>
      <ButtonsContainer>
        <button type="button">수정</button>
        <button type="button">삭제</button>
      </ButtonsContainer>
    </Container>
  );
};

export default TodoCard;
