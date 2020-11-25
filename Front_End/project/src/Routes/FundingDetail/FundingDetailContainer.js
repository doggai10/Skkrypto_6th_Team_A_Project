import React from "react";
import styled from "styled-components";
import FundingDetailPresenter from "./FundingDetailPresenter";

const Container = styled.div``;

const FundingDetailContainer = () => {
    return (
        <Container>
            <FundingDetailPresenter></FundingDetailPresenter>
        </Container>
    );
};

export default FundingDetailContainer;
