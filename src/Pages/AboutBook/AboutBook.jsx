import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../utility/addToDb';

const AboutBook = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const singleData = data.find(book => book.bookId == id);
    const { bookId, image, bookName, author, review, publisher, tags, category, totalPages, yearOfPublishing, rating } = singleData;

    // Add to read
    const ReadlistId = id =>{
        addToStoredDb(id);
    }

    return (
        <div className='md:flex gap-20 mx-10 my-15'>
            <div className='rounded-xl p-5 md:w-2/5 flex justify-center bg-gray-200 h-full'>
                <img className='h-120' src={image} alt="" />
            </div>
            <div className='md:w-3/5'>
                <h1 className='font-bold text-3xl'>
                    {bookName}
                </h1>
                <h1 className='text-xl'>
                    By: {author}
                </h1>
                <div className='border border-gray-300 mt-5'></div>
                <h1 className='text-xl'>{category}</h1>
                <div className='border border-gray-300 mt-5'></div>
                <div><span className='font-bold'>Review:</span>{review}</div>
                <div className='mt-3 flex text-center gap-4 items-center'><span className='font-bold'>Tag:</span>
                    <div className='flex gap-3'>
                        {
                            tags.map(tag => <div className='text-green-900 bg-green-200 rounded-xl p-2'>{tag}</div>)
                        }
                    </div>
                </div>
                <div className='border border-gray-300 mt-5'></div>
                <div className='mb-5'>
                    <div className='flex md:gap-20 text-start'>
                        <span className='w-1/2 md:w-1/3 text-gray-500 font-bold'>Number of Pages:</span>
                        <span className='w-1/2 md:w-1/2 text-start font-bold'>{totalPages}</span>
                    </div>
                    <div className='flex md:gap-20 text-start'>
                        <span className='w-1/2 md:w-1/3 font-bold text-gray-500'>Publisher:</span>
                        <span className='w-1/2 text-start font-bold'>{publisher}</span>
                    </div>
                    <div className='flex md:gap-20'>
                        <span className='text-gray-500 font-bold w-1/2 md:w-1/3'>Year of publishing:</span>
                        <span className='font-bold w-1/2'>{yearOfPublishing}</span>
                    </div>
                    <div className='flex md:gap-20'>
                        <span className='text-gray-500 font-bold w-1/2 md:w-1/3'>Rating:</span>
                        <span className='font-bold'>{rating}</span>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button onClick={()=>ReadlistId(bookId)} className='btn bg-transparent'>Mark As Read</button>
                    <button className='btn btn-primary'>Add To Whishlist</button>
                </div>
            </div>
        </div>
    );
};

export default AboutBook;