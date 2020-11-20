import React, { useState } from "react";
import SignUpPresenter from "./SignUpPresenter";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Error = styled.div`
    color: red;
    opacity: 0.7;
`;
const SignUpContainer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [privatKey, setpKey] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setCofirm] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const SignData = { name, email, privatKey };
        // console.log(SignData);
        try {
            const res = await axios.post("/sign-up", SignData);
            alert("저장 성공!");
        } catch (e) {
            console.log(e);
        }
    };

    const doesPasswordMatch = () => {
        console.log(password, confirm);
        return password === confirm;
    };
    const renderFeedbackMessage = () => {
        if (confirm) {
            if (!doesPasswordMatch()) {
                return <Error>패스워드가 일치하지 않습니다</Error>;
            }
        }
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlepKey = (e) => {
        setpKey(e.target.value);
    };

    const handlePassword = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        // console.log(e.target.value);
        setCofirm(e.target.value);
    };
    console.log(renderFeedbackMessage());
    return (
        <Container>
            <SignUpPresenter
                name={name}
                email={email}
                password={password}
                cofirm={confirm}
                privatKey={privatKey}
                handleName={handleName}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleConfirmPassword={handleConfirmPassword}
                handlepKey={handlepKey}
                handleSubmit={handleSubmit}
                renderFeedbackMessage={renderFeedbackMessage}
            ></SignUpPresenter>
        </Container>
    );
};

export default SignUpContainer;
