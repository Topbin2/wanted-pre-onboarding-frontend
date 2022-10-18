/* eslint-disable react/button-has-type */
import styled from "styled-components";

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
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

interface Prop {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: Prop) => {
  return (
    <SButton onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  );
};

export default Button;
