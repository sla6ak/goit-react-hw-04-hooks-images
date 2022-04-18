import { BoxImgs } from './ImageGallery.styled';
import React from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export const ImageGallery = ({ onModalOpen, arreyImg }) => {
  return (
    <BoxImgs onClick={onModalOpen}>
      {arreyImg.map(impg => {
        return (
          <ImageGalleryItem
            key={impg.id}
            tags={impg.tags}
            largeImageURL={impg.largeImageURL}
            webformatURL={impg.webformatURL}
          />
        );
      })}
    </BoxImgs>
  );
};

ImageGallery.propTypes = {
  onModalOpen: propTypes.func,
  arreyImg: propTypes.array,
};
