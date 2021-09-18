import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  onClick = (e) => {
    this.props.onClick(this.props.largeImageURL);
  };
  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.onClick}
          src={this.props.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
};



