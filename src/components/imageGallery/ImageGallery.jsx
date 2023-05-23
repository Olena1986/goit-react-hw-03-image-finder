import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImgGalleryStyle } from './ImageGallery.styled';
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImgGalleryStyle.GalleryStyle>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ImgGalleryStyle.GalleryStyle>
  );
};

export default ImageGallery;
