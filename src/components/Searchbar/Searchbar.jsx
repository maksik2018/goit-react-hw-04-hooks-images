import React, { useState} from "react";
import PropTypes from 'prop-types';

 export default function Searchbar({onSubmit}) {
  // state = {
  //   searchValue: "",
  // };
   const [searchValue, setSearchValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
    setSearchValue("");
  };
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
    // console.log(e.target.value);
  };

    // render() {
      return (
        <header className="Searchbar">
          <form onSubmit={handleOnSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              name="searchValue"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images"
              onChange={handleOnChange}
              value={searchValue}
            />
          </form>
        </header>
      );

    }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};



