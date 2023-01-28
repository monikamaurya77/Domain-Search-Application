import React from 'react';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-section">
            <input onChange={(event) => onInputChange(event.target.value)} className="search-input" type="text"
                placeholder="search for domains..." />
        </div>
    );
}

export default SearchBox;