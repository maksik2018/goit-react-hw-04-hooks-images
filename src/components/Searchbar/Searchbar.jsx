import React, { Component } from "react";
import PropTypes from 'prop-types';

 export default class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: "" });
  };
  handleOnChange = (e) => {
    this.setState({ searchValue: e.target.value });
    // console.log(e.target.value);
  };

    render() {
      return (
        <header className="Searchbar">
          <form onSubmit={this.handleOnSubmit} className="SearchForm">
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
              onChange={this.handleOnChange}
              value={this.state.searchValue}
            />
          </form>
        </header>
      );

    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};



