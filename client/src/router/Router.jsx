import React from 'react';
import RequireAuth from "../components/requireAuth/RequireAuth";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login";
import Forum from "../views/forum/Forum";
import Topic from "../views/forum/Topic/Topic";
import CreateTopic from "../views/createTopic/createTopic";
import Account from "../views/account/Account";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/" element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }/>
                <Route exact path="/forum" element={
                    <RequireAuth>
                        <Forum />
                    </RequireAuth>
                }/>
                <Route exact path="forum/topic/:id" element={
                    <RequireAuth>
                        <Topic />
                    </RequireAuth>
                }/>
                <Route exact path="forum/topic/new" element={
                    <RequireAuth>
                        <CreateTopic />
                    </RequireAuth>
                }/>
                <Route exact path="account" element={
                    <RequireAuth>
                        <Account />
                    </RequireAuth>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
