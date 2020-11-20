import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.form`
    display: flex;
    flex-direction: column;
`;
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

const Button = styled.button`
    outline: none;
    border: none;
    background: none;
    padding: 0 50px;
    font-size: 25px;
    @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
    font-family: "Jua", sans-serif;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:hover {
        color: #ffeb3b;
    }
`;

Modal.setAppElement("#root");

const SignIn = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [loginKey, setLoginKey] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/login", loginKey);

            const isLogin = await axios.get("/login");

            console.log(isLogin);
        } catch (e) {
            console.log(e);
        }
    };

    const handleKey = (e) => {
        setLoginKey(e.target.value);
    };

    return (
        <div>
            <Button onClick={openModal}>로그인/회원가입</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Container onSubmit={handleSubmit}>
                    <h2>로그인</h2>
                    <div>개인키</div>
                    <input
                        type="text"
                        value={loginKey}
                        onChange={handleKey}
                    ></input>
                    <button>로그인</button>
                    <button onClick={closeModal}>취소</button>
                    <Link to="/signup">회원가입하기</Link>
                </Container>
            </Modal>
        </div>
    );
};

export default SignIn;
