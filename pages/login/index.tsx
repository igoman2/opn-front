import React, { MouseEvent, useContext, useEffect, useRef } from "react";
import styled, { ThemeContext } from "styled-components";

import Button from "../../components/UI/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuthStore } from "../../store";

const Login = () => {
  const themeContext = useContext(ThemeContext);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { signin, isLoggedIn } = useAuthStore();

  const submitHandler = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      await signin({
        username: usernameRef.current!.value,
        password: passwordRef.current!.value,
      });
      router.push("/search");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/search");
    }
  }, [router, isLoggedIn()]);

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
        <Button
          text="로그인"
          backgroundColor={themeContext.colors.blue_1}
          onSubmit={submitHandler}
        />
        <TextWrapper>
          <Link href="/register">회원가입</Link>
        </TextWrapper>
      </Form>
    </FormWrapper>
  );
};

export default Login;

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
