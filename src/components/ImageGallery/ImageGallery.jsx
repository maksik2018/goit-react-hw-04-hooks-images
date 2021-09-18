import React, {Component} from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component  {
  render() {
    const { gallery, onClick } = this.props
    
      return (
        <ul className="ImageGallery">
          {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onClick={onClick}
            />
          ))}
        </ul>
      );
    }
  }


ImageGallery.propTypes = {
  gallery: PropTypes.array,
  onClick: PropTypes.func,
};

