import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

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

Modal.setAppElement("#root");

const Test = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }

    const history = useHistory();

    const GoSignUp = () => {
        console.log("hi");
        console.log(modalIsOpen);
        setIsOpen(false);
        history.push("/signup");
    };

    ///////////////////////////////////////////////////////////

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Container>
                    <h2>로그인</h2>
                    <div>개인키</div>
                    <input type="text"></input>
                    <button>로그인</button>
                    <button onClick={closeModal}>취소</button>
                    <Link onClick={GoSignUp}>회원가입하기</Link>
                </Container>
            </Modal>
        </div>
    );
};

export default Test;
