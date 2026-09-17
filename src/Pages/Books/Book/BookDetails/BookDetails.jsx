import { Star } from 'lucide-react';
import React, { useState } from 'react';

const BookDetails = ({DataBook}) => {
    const {image, bookName, author, category, tags, rating} = DataBook

    const [ratingUpdate, setRatingUpdate] = useState(rating);

    const RatingUpdatetation = () =>{
        setRatingUpdate(ratingUpdate + 1)
        // return
    }
    return (
        <div className='border px-3 py-3 rounded-xl border-gray-300 mb-3 md:mb-0'>
            <div className='flex justify-center bg-gray-200 rounded-xl p-5'>
                <img className='h-60' src={image} alt="" />
            </div>
            <div className='flex gap-5 mt-3'>
                {
                    <>
                        <div className='p-2  text-green-800 bg-green-300 rounded-2xl'>
                            {tags[0]}
                        </div>
                        <div className='p-2 text-green-800 bg-green-300 rounded-2xl'>
                            {tags[1]}
                        </div>
                    </>
                }
            </div>
            <div className='border-b border-dotted'>
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
                    {ratingUpdate.toFixed(1)} <span><Star onClick={()=> RatingUpdatetation()} stroke='#ecce09' className='hover:fill-amber-400 cursor-pointer'></Star></span>
                </h1>
            </div>
        </div>
    );
};

export default BookDetails;