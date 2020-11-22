import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    font-size: 20px;
`;
const customStyles = {
    overlay: {},
    content: {
        height: "300px",
        width: "500px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20px",
    },
};

const Button = styled.button`
    outline: none;
    border: none;
    background: none;
    padding: 0 50px;
    font-size: 25px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
        color: #ffeb3b;
    }
    font-family: "Jua", sans-serif;
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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            const res = await axios.post("/login", userData);

            const isLogin = await axios.get("/login");
            if (isLogin.data) {
            }
            console.log(isLogin);
        } catch (e) {
            console.log(e);
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
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
                    <div>이메일</div>
                    <Input
                        type="text"
                        value={email}
                        onChange={handleEmail}
                    ></Input>
                    <div>패스워드</div>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    ></Input>
                    <button>로그인</button>
                    <button onClick={closeModal}>취소</button>
                    <Link to="/signup" onClick={closeModal}>
                        회원가입하기
                    </Link>
                </Container>
            </Modal>
        </div>
    );
};

export default SignIn;
