import React from "react";
import styled, { StyledProps } from "styled-components";

interface IButtonProsp {
  text: string;
  backgroundColor?: string;
}
const Button: React.FC<IButtonProsp> = ({ text, backgroundColor }) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor}>
      <button>{text}</button>
    </ButtonWrapper>
  );
};

export default Button;

interface StyleProps {
  backgroundColor?: string;
}
const ButtonWrapper = styled.div`
  button {
    color: white;
    font-weight: 700;
    font-size: 14px;
    align-items: center;
    border-radius: 30px;
    min-height: 38px;
    border: 1px solid #bdbdbd;
    width: 320px;
    padding: 0px 17px 0px 20px;
    height: 42px;
    background-color: ${(props: StyleProps) =>
      props ? props.backgroundColor : "#bdbdbd"};
  }
`;
