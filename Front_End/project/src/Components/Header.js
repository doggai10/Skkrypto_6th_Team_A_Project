import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "assets/logo.png";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    width: 100%;
    background: green;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
    font-family: "Jua", sans-serif;
`;

const Title = styled.div`
    font-size: 40px;
`;

const BtnBox = styled.div`
    margin-right: 100px;
`;

const Button = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 0 50px;
    font-size: 25px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:hover {
        color: #ffeb3b;
    }
`;

const Img = styled.img`
    height: 60px;
`;

const LogoBox = styled.div`
    margin-left: 100px;
    display: flex;
`;

const Header = () => {
    return (
        <Container>
            <LogoBox>
                <Img src={Logo} alt={"logo"}></Img>
                <Title>성대한 할인</Title>
            </LogoBox>
            <BtnBox>
                <Button to="/">Home</Button>
                <Button to="/funding">할인 펀딩</Button>
                <Button to="/mypage">로그인/회원가입</Button>
                <Button to="/apply">펀딩 신청</Button>
            </BtnBox>
        </Container>
    );
};

export default Header;
