import React from "react";
import styled from "styled-components";
import BackGround from "assets/background.png";
import m1 from "assets/1.jpg";
import m2 from "assets/2.jpg";
import m3 from "assets/3.jpg";
import m4 from "assets/4.jpg";
import m5 from "assets/5.jpg";
import m6 from "assets/6.jpg";

const Container = styled.div`
    position: relative;
    background-image: url(${BackGround});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Title = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 70px;
    z-index: 0;
    top: 500px;
    padding: 20px 0;
`;

const Box = styled.div`
    position: absolute;
    bottom: 0px;
    background-color: gray;
    opacity: 0.5;
    height: 65%;
    width: 100%;
`;
const ImgBox = styled.div`
    width: 100%;
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    position: absolute;
    bottom: 80px;
    &::-webkit-scrollbar {
        display: none;
    }
    height: 30%;
`;
const Img = styled.img`
    display: block;
    height: auto;
    max-width: 30%;
    object-fit: cover;
    margin-right: 100px;
    border-radius: 10px;
`;
const HomePresenter = () => {
    return (
        <Container>
            <Box></Box>
            <Title>할인 펀딩 목록</Title>
            <ImgBox>
                <Img src={m1}></Img>
                <Img src={m2}></Img>
                <Img src={m6}></Img>
                <Img src={m4}></Img>
                <Img src={m1}></Img>
                <Img src={m2}></Img>
                <Img src={m6}></Img>
                <Img src={m4}></Img>
                <Img src={m3}></Img>
                <Img src={m1}></Img>
                <Img src={m2}></Img>
            </ImgBox>
        </Container>
    );
};
export default HomePresenter;
