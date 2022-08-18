import React, { MouseEvent, useContext, useRef, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import axios from "axios";
import Button from "../../components/UI/Button";
import { useRouter } from "next/router";

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const themeContext = useContext(ThemeContext);
  const submitHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (passwordRef.current!.value !== passwordConfirmRef.current!.value) {
      alert("비밀번호를 확인해주세요");
      return;
    }

    axios
      .post("http://localhost:3030/auth/signup", {
        username: usernameRef.current!.value,
        password: passwordRef.current!.value,
      })
      .then(function (response) {
        router.push("/search");
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };
  return (
    <FormWrapper>
      <Form>
        <input
          type="text"
          id="id"
          placeholder="아이디를 입력해주세요."
          ref={usernameRef}
        />
        <input
          type="password"
          id="id"
          placeholder="비밀번호를 입력해주세요."
          ref={passwordRef}
        />
        <input
          type="password"
          id="id"
          placeholder="비밀번호를 다시 입력해주세요."
          ref={passwordConfirmRef}
        />
        <Button
          text="회원가입"
          backgroundColor={themeContext.colors.blue_1}
          onSubmit={submitHandler}
        />
      </Form>
    </FormWrapper>
  );
};

export default Register;

const FormWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const TextWrapper = styled.div`
  text-decoration: underline;
  text-align: center;
  margin: 1rem;
`;

const Form = styled.form`
  width: 320px;
  margin: 15px 20px 15px 20px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
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
    border: ${(props) => `0.5px solid ${props.theme.colors.gray_1}`};
    padding: 0px 17px 0px 20px;
    height: 42px;
  }
`;
