import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";

const Login = () => {
  return (
    <Form>
      {/* <label htmlFor="id">아이디</label> */}
      <input type="text" id="id" placeholder="아이디를 입력해주세요." />
      <input type="password" id="id" placeholder="비밀번호를 입력해주세요." />
      <Button text="로그인" backgroundColor="#3955b4" />
      <TextWrapper>회원가입</TextWrapper>
    </Form>
  );
};

export default Login;

const TextWrapper = styled.div`
  text-decoration: underline;
  text-align: center;
  margin: 1rem;
`;

const Form = styled.form`
  width: 320px;
  margin: 15px 20px 15px 20px;
  label {
    font-weight: 700;
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
  }
  input {
    display: block;
    align-items: center;
    border-radius: 30px;
    width: 100%;
    min-height: 38px;
    border: 1px solid #bdbdbd;
    padding: 0px 17px 0px 20px;
    height: 42px;
  }
`;
