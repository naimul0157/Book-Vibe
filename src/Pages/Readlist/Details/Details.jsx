import { SquareText, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import AboutBook from '../../AboutBook/AboutBook';

const Details = ({ data }) => {
    const { image, bookId, bookName, author, category, tags, publisher, totalPages, rating } = data
    // console.log(data);
    return (
        <div className='border mb-3 w-4/5 mx-auto px-5 py-10 rounded-2xl md:flex gap-10'>
            <div className='bg-gray-300 md:w-1/4 md:p-3 px-5 py-3 rounded-2xl'>
                <img className='h-50 md:mx-auto mx-auto' src={image} alt="" />
            </div>
            <div className='w-2/3'>
                <h1 className='font-bold text-2xl'>
                    {bookName}
                </h1>
                <h1 className='text-xl'>
                    By:{author}
                </h1>
                <div className='flex gap-10 items-center mt-3'>
                    <h1 className='font-bold'>Tags:</h1>
                    <div className='flex gap-3'>
                        {
                            tags.map(tag => <div className='text-green-600 p-2 bg-green-200 rounded-2xl'>{tag}</div>)
                        }
                    </div>
                </div>
                <div className='mt-3 flex gap-5'>
                    <div className='flex gap-2'>
                        <Users></Users>
                        <h1>Publisher: {publisher}</h1>
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <SquareText></SquareText>
                            <h1><span className='mr-2'>Pages:</span>{totalPages}</h1>
                        </div>
                    </div>
                    
                </div>
                <div className='border-b-2 border-gray-300 mt-3'></div>
                <div className='flex gap-5 mt-5'>
                    <h1 className='p-2 rounded-2xl font-bold text-purple-500 bg-purple-200'>Category:{category}</h1>
                    <h1 className='p-2 rounded-2xl font-bold text-purple-500 bg-purple-200'>Rating:{rating}</h1>
                    <Link to={`/${bookId}`}><button className='btn rounded-2xl btn-primary bg-green-400 border-none'>View Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Details;