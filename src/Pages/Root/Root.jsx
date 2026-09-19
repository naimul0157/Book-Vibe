import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

const Root = () => {
    return (
        <div className='flex flex-col justify-between'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;