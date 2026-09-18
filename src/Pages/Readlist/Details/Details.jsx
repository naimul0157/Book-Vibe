import React from 'react';

const Details = ({data}) => {
    const {image, bookId} = data
    console.log(data);
    return (
        <div className='border mb-3 w-4/5 mx-auto px-5 py-10 rounded-2xl'>
            <div className='bg-gray-300 md:w-1/4 md:p-3 px-5 py-3 rounded-2xl'>
                <img className='h-80 w-4/5 md:mx-auto mx-auto' src={image} alt="" />
            </div>
        </div>
    );
};

export default Details;