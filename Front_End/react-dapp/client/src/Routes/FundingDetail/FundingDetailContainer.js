import React, { useState } from "react";
import styled from "styled-components";
import FundingDetailPresenter from "./FundingDetailPresenter";
import { cav } from "Caver/caver";
// import Caver from "caver-js";

const Container = styled.div``;

const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");

const FundingDetailContainer = () => {
    const abi = [
        {
            constant: false,
            inputs: [
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "deposit",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "getRefund",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "",
                    type: "address",
                },
            ],
            name: "contributions",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "count",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "currentBalance",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getBalance",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
    ];

    //컨트랙트 주소.
    const contractAddress = "0xce4d5fcbfb888f146087ca4c5dd84976ec3c1af1";
    const [visible, setVisible] = useState(false);
    const [privkey, setPrivkey] = useState("");

    const handleKey = (e) => {
        setPrivkey(e.target.value);
    };

    const handleOkandCancel = async (e) => {
        e.preventDefault();
        setVisible(false);

        const deployer = cav.klay.accounts.privateKeyToAccount(privkey);
        cav.klay.accounts.wallet.add(deployer);

        const contractInstance = new cav.contract(abi, contractAddress);

        console.log(contractInstance);
        const walletInstance =
            cav.klay.accounts.wallet && cav.klay.accounts.wallet[0];
        if (!walletInstance) return;

        console.log(walletInstance);
        try {
            const value = await contractInstance.methods.deposit(1).send({
                from: walletInstance.address,
                gas: "200000",
            });
            console.log(value);
        } catch (e) {
            console.log(e);
        }

        // console.log(contractInstance);
        // try {
        //     contractInstance.methods
        //         .deposit(1)
        //         .send({
        //             from: keyring.address,
        //             gas: 25000,
        //             value: cav.utils.convertToPeb(1, "KLAY"),
        //         })
        //         .once("transactionHash", (txHash) => {
        //             console.log(`
        //                     Sending a transaction... (Call contract's function 'minus')
        //                     txHash: ${txHash}
        //                   `);
        //         })
        //         .once("receipt", (receipt) => {
        //             console.log(
        //                 `
        //                   Received receipt which means your transaction(calling minus function)
        //                   is in klaytn block(#${receipt.blockNumber})
        //                 `,
        //                 receipt
        //             );
        //         })
        //         .once("error", (error) => {
        //             alert(error.message);
        //         });
        // } catch (e) {
        //     console.log(e);
        // }
    };

    const handleFunding = (e) => {
        setVisible(true);
    };

    const handleCancel = (e) => {};

    return (
        <Container>
            <FundingDetailPresenter
                visible={visible}
                privkey={privkey}
                handleFunding={handleFunding}
                handleCancel={handleCancel}
                handleOkandCancel={handleOkandCancel}
                handleKey={handleKey}
            ></FundingDetailPresenter>
        </Container>
    );
};

export default FundingDetailContainer;
