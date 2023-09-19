/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/footer';
const Home = () => {
    return (
        <div>

            <Header>
            </Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;