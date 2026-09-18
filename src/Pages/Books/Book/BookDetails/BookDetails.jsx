import { Star } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const BookDetails = ({ DataBook }) => {
    const { bookId,image, bookName, author, category, tags, rating } = DataBook

    // Rating update

    const [ratingUpdate, setRatingUpdate] = useState(rating);

    const RatingUpdatetation = () => {
        setRatingUpdate(ratingUpdate + 1)
    }
    return (
        <NavLink to={`/${bookId}`}>
            <div className='border px-3 py-3 rounded-xl border-gray-300 mb-3 md:mb-0 flex flex-col justify-between'>
                <div className='flex justify-center bg-gray-200 rounded-xl p-5'>
                    <img className='h-60' src={image} alt="" />
                </div>
                <div className='flex gap-5 mt-3'>
                    {
                        tags.map(tag => <div className='text-green-800 rounded-xl p-2 bg-green-100'>{tag}</div>)
                    }
                </div>
                <div className='border-b border-dashed'>
                    <h1 className='font-bold text-xl'>
                        {bookName}
                    </h1>
                    <h1>
                        BY: {author}
                    </h1>
                </div>
                <div className='flex justify-between'>
                    <h1>
                        {category}
                    </h1>
                    <h1 className='flex gap-2'>
                        {ratingUpdate.toFixed(1)} <span><Star onClick={() => RatingUpdatetation()} stroke='#ecce09' className='hover:fill-amber-400 cursor-pointer'></Star></span>
                    </h1>
                </div>
            </div>
        </NavLink>
    );
};

export default BookDetails;