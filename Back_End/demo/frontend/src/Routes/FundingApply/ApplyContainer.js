import React, { useState } from "react";
import styled from "styled-components";
import ApplyPresenter from "./ApplyrPresenter";
import Http from "Api/api";

const Container = styled.div`
    overflow: auto;
`;

const ApplyContainer = () => {
    const [wallet, setWallet] = useState("");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [sale, setSale] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [money, setMoney] = useState(null);
    const [quantity, setQuantity] = useState(null);

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

    const handleMoney = (e) => {
        setMoney(e.target.value);
    };

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const handleForm = async (e) => {
        e.preventDefault();
        const info = {
            wallet,
            name,
            content,
            sale,
            startDate,
            money,
            quantity,
        };
        console.log(info);
        alert("관리자 검토 후 등록 완료됩니다.");
        try {
            const respose = await Http.post("/apply", info);

            alert("저장 성공!");
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
                startDate={startDate}
                money={money}
                quantity={quantity}
                handleWallet={handleWallet}
                handleName={handleName}
                handleContent={handleContent}
                handleSale={handleSale}
                handleForm={handleForm}
                setStartDate={setStartDate}
                handleMoney={handleMoney}
                handleQuantity={handleQuantity}
            ></ApplyPresenter>
        </Container>
    );
};

export default ApplyContainer;
