import React from 'react';

const BookCard = (props) => {
    const { authors, pageCount, publishedDate } = props.book.volumeInfo
    const { thumbnail } = props.book.volumeInfo.imageLinks

    return (
        <div className="book-card">
            <img src={thumbnail} />
            <div className="card-body">
                <p>{props.book.volumeInfo.title}</p>
                <p>By : <i>{authors.join(' & ')}</i></p>
                <p>Published: {new Date(publishedDate).getFullYear()}</p>
                <p>Pages: {pageCount} </p>
            </div>
        </div>
    );
};

export default BookCard;