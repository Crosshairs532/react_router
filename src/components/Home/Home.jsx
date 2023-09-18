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
            <h2>You are in the home page now</h2>

            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;