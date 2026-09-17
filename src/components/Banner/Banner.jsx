import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='md:flex justify-between mt-10 rounded-md px-5 py-10 justify-items-center mb-10 md:w-full w-4/5 mx-auto bg-linear-to-r from-gray-400 to-gray-200'>
            <div className='flex flex-col md:items-start md:justify-center'>
                <h1 className='font-bold text-2xl mb-5'>
                    Books to freshen up <br /> your bookshelf
                </h1>
                <button className='btn btn-primary mb-5'>
                    View the list
                </button>
            </div>
            <div>
                <img className='rounded-md'  src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;