import React from 'react';

const SearchArea = () => {
    return (
        <div className="search-area">
            <form>
                <input type="text" placeholder="Enter Book Name..." />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchArea;