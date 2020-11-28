import React, { useState } from "react";
import styled from "styled-components";
import FundingDetailPresenter from "./FundingDetailPresenter";
import { cav } from "Caver/caver";

const Container = styled.div``;

const FundingDetailContainer = () => {
    const abi = [
        {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, name: "from", type: "address" },
                { indexed: true, name: "to", type: "address" },
                { indexed: false, name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            constant: false,
            inputs: [
                { name: "restaurant", type: "address" },
                { name: "foodname", type: "string" },
                { name: "endTime", type: "uint256" },
                { name: "totalAmount", type: "uint256" },
                { name: "price", type: "uint256" },
            ],
            name: "createFunding",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { name: "a", type: "address" },
                { name: "f", type: "string" },
                { name: "money", type: "uint256" },
            ],
            name: "findTarget",
            outputs: [{ name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { name: "idx", type: "uint256" },
                { name: "money", type: "uint256" },
            ],
            name: "UpdateValue",
            outputs: [{ name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [{ name: "idx", type: "uint256" }],
            name: "checkDone",
            outputs: [{ name: "", type: "bool" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "deposit",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getBalance",
            outputs: [{ name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [{ name: "amount", type: "uint256" }],
            name: "transfer",
            outputs: [{ name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
    ];

    //컨트랙트 주소.
    const address = "0x05e495a259e13abbbd4d25aea60e868e901d9340";
    const [visible, setVisible] = useState(false);
    const [privkey, setPrivkey] = useState("");

    const handleKey = (e) => {
        setPrivkey(e.target.value);
    };

    const handleOkandCancel = async () => {
        setVisible(false);

        const keyring = cav.klay.accounts.privateKeyToAccount(privkey);
        cav.klay.accounts.wallet.add(keyring);
        const walletInstance =
            cav.klay.accounts.wallet && cav.klay.accounts.wallet[0];

        console.log(walletInstance.address);
        const contractInstance = new cav.contract(abi, address);
        console.log(contractInstance.methods);
        await contractInstance.methods
            .deposit()
            .send({
                from: walletInstance.address,
                gas: "250000",
                value: cav.utils.toPeb(1, "KLAY"),
            })
            .once("transactionHash", (txHash) => {
                console.log(`
                Sending a transaction... (Call contract's function 'plus')
                txHash: ${txHash}
                `);
            })
            .once("receipt", (receipt) => {
                console.log(
                    `
                Received receipt! It means your transaction(calling plus function)
                is in klaytn block(#${receipt.blockNumber})
            `,
                    receipt
                );
            })
            .once("error", (error) => {
                alert(error.message);
            });
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
