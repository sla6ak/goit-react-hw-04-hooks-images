
import React from 'react';
import propTypes from 'prop-types';
import { ElementGallery, Impeg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  return (
    <ElementGallery>
      <Impeg
        src={webformatURL}
        data-img={largeImageURL}
        alt={tags}
        width={500}
      />
    </ElementGallery>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string,
  largeImageURL: propTypes.string,
  tags: propTypes.string,
};
