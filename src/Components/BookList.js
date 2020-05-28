import React from 'react';
import BookCard from './BookCard'
const BookList = props => {
    const allBooks = props.books;
    const books = allBooks.map(book => {
        return <BookCard book={book} key={book.id} />
    })
    return (
        <div className="book-list">
            {books}
        </div>
    );
};

export default BookList;