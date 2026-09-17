import React from 'react';

const BookDetails = ({DataBook}) => {
    const {image, bookName, author} = DataBook
    return (
        <div className='border px-3 py-3 rounded-xl border-gray-300'>
            <div className='flex justify-center bg-gray-200 rounded-xl p-5'>
                <img className='h-60' src={image} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-xl'>
                    {bookName}
                </h1>
                <h1 className='text-xl'>
                    BY: {author}
                </h1>
            </div>
        </div>
    );
};

export default BookDetails;