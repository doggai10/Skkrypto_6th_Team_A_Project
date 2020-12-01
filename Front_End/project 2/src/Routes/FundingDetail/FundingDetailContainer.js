import React, { useState } from "react";
import styled from "styled-components";
import FundingDetailPresenter from "./FundingDetailPresenter";
import { cav } from "Caver/caver";
import Contract from "Contracts/contract";

// import Caver from "caver-js";

const Container = styled.div``;

const FundingDetailContainer = () => {
    //컨트랙트 주소.

    const contractInstance = new cav.contract(Contract.abi, Contract.address);
    const [fundingvisible, setVisible] = useState(false);
    const [cancelVisible, setCancel] = useState(false);
    const [privkey, setPrivkey] = useState("");

    const [FundingDone, setFunding] = useState(false);

    const handleKey = (e) => {
        setPrivkey(e.target.value);
    };

    // 모달 창에서 취소버튼 눌렀을때

    const Cancel = (e) => {
        e.preventDefault();
        setVisible(false);
    };

    const amount = 0.1;

    // 펀딩하기 버튼에서 확인 버튼 눌렀을 때
    const handleOk = async (e) => {
        e.preventDefault();

        if (privkey === "") {
            alert("키를 입력해주세요!");
            return;
        }

        setVisible(false);

        const deployer = cav.wallet.keyring.createFromPrivateKey(privkey);
        cav.wallet.add(deployer);

        console.log(contractInstance);

        try {
            const value = await contractInstance.methods.deposit().send({
                from: deployer.address,
                gas: "250000",
                value: cav.utils.convertToPeb(String(amount), "KLAY"),
            });
            alert("펀딩 성공!");
            console.log(value);
        } catch (e) {
            alert("펀딩 실패ㅜㅜ");
            console.log(e);
        }
        setPrivkey("");
        cav.wallet.remove(deployer.address);
        // 펀딩 완료시.
    };

    // 펀딩하기 버튼 눌렀을때.
    const handleFunding = (e) => {
        setVisible(true);
    };

    // 펀딩 취소하기 눌렀을 때.
    const handleCancel = async (e) => {
        setCancel(true);
    };

    const handleCancelInsideCancel = () => {
        setCancel(false);
    };

    const fundingCancelOk = async (e) => {
        e.preventDefault();
        setCancel(false);

        if (privkey === "") {
            alert("키를 입력해주세요!");
            return;
        }

        const deployer = cav.wallet.keyring.createFromPrivateKey(privkey);
        cav.wallet.add(deployer);
        const v = cav.utils.convertToPeb("0.1", "KLAY");
        try {
            const reci = await contractInstance.methods.transfer(v).send({
                from: deployer.address,
                gas: "250000",
            });
            console.log(reci);
            alert("취소 완료!");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container>
            <FundingDetailPresenter
                fundingvisible={fundingvisible}
                privkey={privkey}
                handleFunding={handleFunding}
                handleCancel={handleCancel}
                handleOk={handleOk}
                handleKey={handleKey}
                Cancel={Cancel}
                cancelVisible={cancelVisible}
                handleCancelInsideCancel={handleCancelInsideCancel}
                fundingCancelOk={fundingCancelOk}
            ></FundingDetailPresenter>
        </Container>
    );
};

export default FundingDetailContainer;
