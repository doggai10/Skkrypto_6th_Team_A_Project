import React from "react";
import styled from "styled-components";

const Container = styled.form``;

const Title = styled.div``;

const Input = styled.input``;

const SignUpPresenter = ({
    name,
    email,
    address,
    privatKey,
    handleName,
    handleEmail,
    handleAddress,
    handlepKey,
    handleSubmit,
}) => {
    return (
        <Container onSubmit={handleSubmit}>
            <Title>이름</Title>
            <Input onChange={handleName} value={name}></Input>
            <Title>이메일</Title>
            <Input onChange={handleEmail} value={email}></Input>
            <Title>지갑 주소</Title>
            <Input onChange={handleAddress} value={address}></Input>
            <Title>개인키</Title>
            <Input onChange={handlepKey} value={privatKey}></Input>
            <button>SAVE</button>
        </Container>
    );
};

export default SignUpPresenter;
