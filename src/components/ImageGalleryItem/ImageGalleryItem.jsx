import React from "react";
import PropTypes from "prop-types";

export default function ImageGalleryItem({largeImageURL, onClick, webformatURL})  {
  const handleOnClick = (e) => {
    onClick(largeImageURL);
  };
  // render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={handleOnClick}
          src={webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
// }

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
};



