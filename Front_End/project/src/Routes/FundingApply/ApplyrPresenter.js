import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
`;
const Title = styled.div``;
const Input = styled.input`
    margin-bottom: 20px;
`;

const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Button = styled.button``;

const ApplyPresenter = ({
    wallet,
    name,
    content,
    sale,
    handleWallet,
    handleName,
    handleContent,
    handleSale,
    handleForm,
}) => {
    return (
        <Container>
            <Form onSubmit={handleForm}>
                <Title>지갑주소</Title>
                <Input
                    type="text"
                    onChange={handleWallet}
                    value={wallet}
                ></Input>
                <Title>가게명</Title>
                <Input type="text" onChange={handleName} value={name}></Input>
                <Title>소개</Title>
                <Input
                    type="text"
                    onChange={handleContent}
                    value={content}
                ></Input>
                <Title>할인 품목</Title>
                <Input type="text" onChange={handleSale} value={sale}></Input>
                <Button>SAVE</Button>
            </Form>
        </Container>
    );
};

export default ApplyPresenter;
