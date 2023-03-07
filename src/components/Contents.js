import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from '../pages/main';
import Join from '../pages/member/join';
import Login from '../pages/member/login';
import List from '../pages/board/list';
import Myinfo from '../pages/member/myinfo';
import NotFound from '../pages/NotFound';
import Zipcode from "../pages/zipcode";

const contents = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/zipcode" element={<Zipcode />} />
                <Route path="/member/join" element={<Join />} />
                <Route path="/member/login" element={<Login />} />
                <Route path="/board/list" element={<List />} />
                <Route path="/member/myinfo" element={<Myinfo />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default contents;