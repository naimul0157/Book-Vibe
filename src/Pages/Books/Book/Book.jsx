import React, { use } from 'react';
import BookDetails from './BookDetails/BookDetails';

const Book = ({PromiseData}) => {
    const BooksData = use(PromiseData);
    return (
        <div className='grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 md:w-full w-4/5 mx-auto'>
            {
                BooksData.map(DataBook => <BookDetails key={DataBook.bookId} DataBook={DataBook}></BookDetails>)
            }
        </div>
    );
};

export default Book;