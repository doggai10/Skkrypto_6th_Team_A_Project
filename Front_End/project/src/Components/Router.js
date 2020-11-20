import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Funding from "Routes/Funding";
import Mypage from "Routes/Mypage";
import Apply from "Routes/FundingApply";
import SignIn from "Components/SignIn";
import Test from "Routes/Test";
import SignUp from "Routes/SignUp";
import SignUpPresenter from "Routes/SignUp/SignUpPresenter";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mypage" exact component={Mypage} />
                <Route path="/funding" exact component={Funding} />
                <Route path="/apply" exact component={Apply} />
                <Route path="/funding/:id" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/test" exact component={Test} />
                <Route path="/signup" exact component={SignUp} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
