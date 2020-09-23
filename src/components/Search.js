import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const Search = ({ value, onChangeHandler, onSubmitHandler, deleteSearchValue }) => {
    return (
        <div className="search">
            <form onSubmit={onSubmitHandler} className="search__form">
                <button className="search__button" type="submit">
                    <FontAwesomeIcon icon={faSearch} className="search__icon" />
                </button>
                <input
                    type="text"
                    value={value}
                    onChange={onChangeHandler}
                    className="search__input"
                    placeholder="Search free recipes"
                />
                <button onClick={deleteSearchValue} className="search__button">
                    <FontAwesomeIcon icon={faTimes} className="search__icon" />
                </button>
            </form>
        </div>
    );
};

export default Search;