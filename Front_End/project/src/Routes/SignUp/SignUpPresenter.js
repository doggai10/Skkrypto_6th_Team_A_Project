import React from "react";
import styled from "styled-components";

const Container = styled.form`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div``;

const Input = styled.input`
    font-size: 30px;
    margin-bottom: 20px;
`;

const SecretInput = styled.input`
    font-size: 30px;
`;

const Button = styled.button`
    margin-top: 20px;
`;

const Error = styled.div``;

const SignUpPresenter = ({
    name,
    email,
    password,
    confirm,
    privatKey,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handlepKey,
    handleSubmit,
    renderFeedbackMessage,
}) => {
    return (
        <Container onSubmit={handleSubmit}>
            <Title>이름</Title>
            <Input onChange={handleName} value={name}></Input>
            <Title>이메일</Title>
            <Input onChange={handleEmail} value={email}></Input>
            <Title>패스워드</Title>
            <Input onChange={handlePassword} value={password}></Input>
            <Title>패스워드 확인</Title>
            <Input onChange={handleConfirmPassword} value={confirm}></Input>
            {renderFeedbackMessage()}
            <Title>개인키</Title>
            <SecretInput
                type="password"
                onChange={handlepKey}
                value={privatKey}
            ></SecretInput>
            <Button>SAVE</Button>
        </Container>
    );
};

export default SignUpPresenter;
