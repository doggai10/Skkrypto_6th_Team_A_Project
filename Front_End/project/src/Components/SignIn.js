import React, { Component } from "react";
import LoginModal from "react-login-modal";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div``;

const SignIn = () => {
    const handleSignup = (username, email, password) => {};
    const handleLogin = async (username, password) => {
        try {
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container>
            <LoginModal handleSignup={handleSignup} handleLogin={handleLogin} />
        </Container>
    );
};

export default SignIn;
