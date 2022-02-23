import React from 'react'
import { Route, Routes } from "react-router-dom";
import Users from './components/Users/Users';
import Home from './Home';

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/users' element={<Users />} />
            </Routes>
        </>
    )
}
