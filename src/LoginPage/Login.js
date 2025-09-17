// LoginForm.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #111111;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #333333;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #e0dfe4;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #8b5cf6;
  }
  &::placeholder {
    color: #b0b0b0;
  }
`;

const Button = styled.button`
  width: 300px;
  padding: 12px;
  background-color: #4C2929;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const SignUpButton = styled.button`
  margin-top: 20px;
  background : none;
  color: #381c1cff;
  font-size: 16px;
  cursor: pointer;
  text-decoration : underline;
  outline : none;
  border : none;
`;

const Box = styled.div`
margin-top:20px;
`;

const LoginForm = () => {
  const [email, setEmail] = useState(""); //상태값 
  const [password, setPassword] = useState("");

  const isValid = email && password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`이메일: ${email}\n비밀번호: ${password}`);
    }
  };

  return (
    <Container>
      <Title>이메일과 비밀번호를 입력해주세요</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>이메일 주소</Label>
          <Input
            type="email"
            placeholder="test@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <Button type="submit" disabled={!isValid}>
          확인
        </Button>
      </form>

      <Box>
      <Label>처음 방문하셨나요?</Label>
      <SignUpButton>회원가입</SignUpButton>
      </Box>
    </Container>
  );
};

export default LoginForm;
