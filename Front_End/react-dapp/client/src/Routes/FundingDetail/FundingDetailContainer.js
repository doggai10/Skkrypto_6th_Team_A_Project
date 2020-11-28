import React, { useState } from "react";
import styled from "styled-components";
import FundingDetailPresenter from "./FundingDetailPresenter";

const Container = styled.div``;

const FundingDetailContainer = () => {
    const handleFunding = (e) => {
        console.log("hi");
    };

    const handleCancel = (e) => {
        console.log("hi");
    };

    return (
        <Container>
            <FundingDetailPresenter
                handleFunding={handleFunding}
                handleCancel={handleCancel}
            ></FundingDetailPresenter>
        </Container>
    );
};

export default FundingDetailContainer;
