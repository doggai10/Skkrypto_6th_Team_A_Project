import React from "react";
import styled from "styled-components";
import BackGround from "assets/background.png";

const Container = styled.div`
    background-image: url(${BackGround});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Title = styled.div``;

const HomePresenter = () => {
    return <Container></Container>;
};
export default HomePresenter;
