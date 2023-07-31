import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { PropTypes } from 'prop-types';

import { ImageGalleryGrid } from './ImageGallery-grid';

export const ImageGallery = ({ images, onOpenModal }) => {
  console.log(images);
  return (
    <div>
      <ImageGalleryGrid className="gallery">
        {images &&
          images.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              onOpenModal={onOpenModal}
            />
          ))}
      </ImageGalleryGrid>
    </div>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
