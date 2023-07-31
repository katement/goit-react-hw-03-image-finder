import React from 'react';
import { StyledImageGalleryItem } from './ImageGalleryItem-list';

export const ImageGalleryItem = ({ image, onOpenModal }) => {
  return (
    <StyledImageGalleryItem
      onClick={() => onOpenModal(image)}
      className="gallery-item"
    >
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="gallery-image"
        width="320"
      />
    </StyledImageGalleryItem>
  );
};
