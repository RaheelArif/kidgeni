import React, { useState } from 'react';
import styles from './ProductImageGallery.module.scss';
import Image from 'next/image';

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.imageGallery}>
      <div className={styles.mainImageContainer}>
        <Image
          src={selectedImage}
          alt="Product Main Image"
          fill={true}
          style={{ objectFit: 'contain' }}
          className={styles.mainImage}
        />
      </div>

    </div>
  );
};

export default ProductImageGallery;