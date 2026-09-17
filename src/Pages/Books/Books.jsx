import React, { Suspense, use } from 'react';
import Book from './Book/Book';

const Books = () => {

    const PromiseData = fetch('booksData.json').then(res => res.json());
    
    return (
        <div className='mb-6'>
            <h1 className='text-center font-bold text-3xl'>Books</h1>
            <Suspense>
                <Book PromiseData={PromiseData}></Book>
            </Suspense>
        </div>
    );
};

export default Books;