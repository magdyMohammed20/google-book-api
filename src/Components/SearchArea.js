import React from 'react';

const SearchArea = props => {

    return (
        <div className="search-area">
            <form onSubmit={props.searchBook}>
                <input type="text" onChange={props.handleSearch} placeholder="Enter Book Name..." />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchArea;