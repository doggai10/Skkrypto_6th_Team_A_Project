import React from "react";
import styled from "styled-components";
import BackGround from "assets/background.png";
import m1 from "assets/1.jpg";
import m2 from "assets/2.jpg";
import m3 from "assets/3.jpg";
import m4 from "assets/4.jpg";
import m5 from "assets/5.jpg";
import m6 from "assets/6.jpg";
import m7 from "assets/7.jpg";

const Container = styled.div`
    position: relative;
    background-image: url(${BackGround});
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Title = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 70px;
    z-index: 0;
    top: 20px;
    padding: 20px 0;
`;

const Box = styled.div`
    position: absolute;
    bottom: 0;
    background-color: rgba(226, 226, 226, 0.5);
    height: 60%;
    width: 100%;
`;
const ImgBox = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    position: absolute;
    bottom: 0;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Img = styled.div`
    position: relative;
    flex: 0 0 auto;
    height: 70%;
    width: 30%;
    margin: 0 40px;
    border-radius: 10px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
`;
const Info = styled.div`
    position: absolute;
    height: 30%;
    width: 100%;
    bottom: 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-size: 60px;
`;

const HomePresenter = () => {
    return (
        <Container>
            <Box>
                <Title>할인 펀딩 목록</Title>
                <ImgBox>
                    <Img img={m7}>
                        <Info>알촌_율전캠</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>품_명륜캠</Info>
                    </Img>
                    <Img img={m6}>
                        <Info>쇼타 돈부리_명륜캠</Info>
                    </Img>
                    <Img img={m4}>
                        <Info>물결식당_명륜캠</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m6}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m4}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                </ImgBox>
            </Box>
        </Container>
    );
};
export default HomePresenter;
