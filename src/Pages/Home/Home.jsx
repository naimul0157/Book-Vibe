import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;