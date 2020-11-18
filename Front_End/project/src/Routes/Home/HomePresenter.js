import React from "react";
import styled from "styled-components";
import BackGround from "assets/background.png";

const Container = styled.div`
    height: 100vh;
    background-image: url(${BackGround});
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
`;

const Title = styled.div`
    font-size: 40px;
    color: white;
`;

const HomePresenter = () => {
    return <Container></Container>;
};
export default HomePresenter;
