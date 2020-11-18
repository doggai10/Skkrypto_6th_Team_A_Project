import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.div``;
const Input = styled.input``;

const Form = styled.form``;

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
