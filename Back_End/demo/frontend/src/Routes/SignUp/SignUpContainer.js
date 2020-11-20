import React, { useState } from "react";
import SignUpPresenter from "./SignUpPresenter";
import axios from "axios";

const SignUpContainer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [privatKey, setpKey] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const SignData = { name, email, address, privatKey };
        console.log(SignData);
        try {
            const res = await axios.post("/sign-up", SignData);
            alert("저장 성공!");
        } catch (e) {
            console.log(e);
        }
    };

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleAddress = (e) => {
        setAddress(e.target.value);
    };
    const handlepKey = (e) => {
        setpKey(e.target.value);
    };

    return (
        <SignUpPresenter
            name={name}
            email={email}
            address={address}
            privatKey={privatKey}
            handleName={handleName}
            handleEmail={handleEmail}
            handleAddress={handleAddress}
            handlepKey={handlepKey}
            handleSubmit={handleSubmit}
        ></SignUpPresenter>
    );
};

export default SignUpContainer;
