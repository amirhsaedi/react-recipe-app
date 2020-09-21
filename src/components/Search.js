import React from 'react';

const Search = ({ value, onChangeHandler, onSubmitHandler }) => {
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="search" value={value} onChange={onChangeHandler} />
            <button>search</button>
        </form>
    );
};

export default Search;