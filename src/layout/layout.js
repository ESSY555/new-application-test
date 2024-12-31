import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import '../App.css';
import Headers from './../components/header';

const Layout = () => {
    return (
        <div className="layout">

            <div className="content-wrapper">
                <Sidebar />
                <Headers />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>

        </div>
    );
};

export default Layout;
