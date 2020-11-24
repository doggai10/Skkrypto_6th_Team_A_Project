import React from "react";
import styled from "styled-components";
import m3 from "assets/3.jpg";
import m4 from "assets/4.jpg";
import m5 from "assets/5.jpg";
import m6 from "assets/6.jpg";

const Container = styled.div`
    height: 100vh;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Img = styled.img`
    height: 700px;
    width: 700px;
    object-fit: cover;
`;
const FundingPresenter = () => {
    return (
        <Container>
            <Img src={m3}></Img>
            <Img src={m4}></Img>
            <Img src={m5}></Img>
            <Img src={m6}></Img>
        </Container>
    );
};

export default FundingPresenter;
