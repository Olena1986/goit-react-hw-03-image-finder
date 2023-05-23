import React from 'react';
import { GalleryItemStyle } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <GalleryItemStyle.GallerryItem>
      <GalleryItemStyle.GallerryItemImg
        src={image.webformatURL}
        alt=""
        onClick={onClick}
      />
    </GalleryItemStyle.GallerryItem>
  );
};

export default ImageGalleryItem;
