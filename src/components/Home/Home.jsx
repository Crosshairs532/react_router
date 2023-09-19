/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/footer';
const Home = () => {
    const nav = useNavigation();
    return (
        <div>

            <Header>
            </Header>
            {
                nav.state === "loading" ? <p>loading....</p> : <Outlet></Outlet>
            }
            <Footer></Footer>

        </div>
    );
};

export default Home;