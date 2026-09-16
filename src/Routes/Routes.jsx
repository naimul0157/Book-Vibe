import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorHandle from '../Pages/ErrorHandle/ErrorHandle';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorHandle></ErrorHandle>,
    children:[{
        index: true,
        path: '/',
        Component: Home

    },
    {
        path: '/listed_books',
        Component: ListedBooks
    }
]
  }
])
