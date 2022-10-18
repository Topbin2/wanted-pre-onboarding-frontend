import { useState } from "react";
import styled from "styled-components";

import { signIn, signUp } from "../../apis";
import { Input } from "../../components";
import { useValidate } from "../../hooks";
import { emailValidation, passwordValidation } from "../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 400px;
  padding: 30px;
  background-color: white;
  border-radius: 0 0 7px 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  padding: 20px 0;
  color: #ffffff;
  background-color: #1561ed;
  border: none;
  border-radius: 20px;
  transition: all 0.4s;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const Tab = styled.section<{ isLogin: boolean }>`
  display: flex;
  width: 400px;

  & > button {
    border: 1px solid black;
    border-radius: 10px 10px 0 0;
    flex-basis: 50%;
    padding: 15px 0;
    border: none;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    transition: all 0.4s;
  }

  & > button:first-child {
    background-color: ${({ isLogin }) => (isLogin ? "#1561ed" : "inherit")};
    color: ${({ isLogin }) => (isLogin ? "#ffffff" : "#000000")};
  }

  & > button:last-child {
    background-color: ${({ isLogin }) => (isLogin ? "inherit" : "#1561ed")};
    color: ${({ isLogin }) => (isLogin ? "#000000" : "#ffffff")};
  }
`;

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailValue, emailError, isEmailValidate, handleEmail, checkEmail] =
    useValidate(emailValidation);
  const [
    passwordValue,
    passwordError,
    isPasswordValidate,
    handlePassword,
    checkPassword,
  ] = useValidate(passwordValidation);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      signIn({ email: emailValue, password: passwordValue });
    }

    if (!isLogin) {
      signUp({ email: emailValue, password: passwordValue });
    }
  };

  return (
    <Container>
      <Tab isLogin={isLogin}>
        <button type="button" onClick={() => setIsLogin(true)}>
          로그인
        </button>
        <button type="button" onClick={() => setIsLogin(false)}>
          회원가입
        </button>
      </Tab>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          label="이메일"
          id="이메일"
          value={emailValue}
          isError={emailError}
          errorMsg="이메일 형식을 확인해주세요."
          onChange={(e) => handleEmail(e)}
        />
        <Input
          type="password"
          label="비밀번호"
          id="비밀번호"
          value={passwordValue}
          isError={passwordError}
          errorMsg="비밀번호를 8글자 이상 입력해주세요."
          onChange={(e) => handlePassword(e)}
        />
        <Button disabled={!isEmailValidate || !isPasswordValidate}>
          {isLogin ? "로그인" : "회원가입"}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
