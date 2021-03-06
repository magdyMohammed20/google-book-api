import React from 'react';

const BookCard = (props) => {
    const { authors, pageCount, publishedDate, title } = props.book.volumeInfo
    const { thumbnail } = props.book.volumeInfo.imageLinks

    return (
        <div className="book-card">
            <img src={thumbnail} />
            <div className="card-body">
                <p>{title}</p>
                <p>By : <i>{authors.join(' & ')}</i></p>
                <p>Published: {publishedDate === '0000' ? 'UnKnown' : new Date(publishedDate).getFullYear()}</p>
                <p>Pages: {pageCount} </p>
            </div>
        </div>
    );
};

export default BookCard;