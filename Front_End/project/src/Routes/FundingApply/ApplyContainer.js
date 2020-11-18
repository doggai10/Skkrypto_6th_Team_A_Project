import React, { useState } from "react";
import styled from "styled-components";
import ApplyPresenter from "./ApplyrPresenter";
import Http from "Api/api";

const Container = styled.div``;

const ApplyContainer = () => {
    const [wallet, setWallet] = useState("");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [sale, setSale] = useState("");

    const handleWallet = (e) => {
        setWallet(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const handleSale = (e) => {
        setSale(e.target.value);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const info = {
            wallet,
            name,
            content,
            sale,
        };
        try {
            const respose = await Http.post("/apply", info);
            console.log(respose);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container>
            <ApplyPresenter
                wallet={wallet}
                name={name}
                content={content}
                sale={sale}
                handleWallet={handleWallet}
                handleName={handleName}
                handleContent={handleContent}
                handleSale={handleSale}
                handleForm={handleForm}
            ></ApplyPresenter>
        </Container>
    );
};

export default ApplyContainer;
