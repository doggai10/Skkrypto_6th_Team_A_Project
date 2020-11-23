import React, { useState } from "react";
import SignUpPresenter from "./SignUpPresenter";
import axios from "axios";
import styled from "styled-components";
import { cav } from "Caver/caver";
import { signatureData } from "caver-js/packages/caver-wallet/src/keyring/keyringFactory";

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
    const [password, setPassword] = useState("");
    const [confirm, setCofirm] = useState("");
    const [key, setKeyring] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const SignData = { name, email, password, key };
        console.log(SignData);

        try {
            const res = await axios.post("/sign-up", SignData);
            alert("저장 성공!");
        } catch (e) {
            console.log(e);
        }
    };

    const getKeyring = async () => {
        const keyring = await cav.wallet.keyring.generate();
        setKeyring(keyring.address);
    };
    const doesPasswordMatch = () => {
        return password === confirm;
    };
    const renderFeedbackMessage = () => {
        if (confirm) {
            if (!doesPasswordMatch()) {
                return <Error>패스워드가 일치하지 않습니다.</Error>;
            }
        }
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setCofirm(e.target.value);
    };

    return (
        <Container>
            <SignUpPresenter
                name={name}
                email={email}
                password={password}
                cofirm={confirm}
                handleName={handleName}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleConfirmPassword={handleConfirmPassword}
                handleSubmit={handleSubmit}
                renderFeedbackMessage={renderFeedbackMessage}
                doesPasswordMatch={doesPasswordMatch}
                getKeyring={getKeyring}
            ></SignUpPresenter>
        </Container>
    );
};

export default SignUpContainer;
