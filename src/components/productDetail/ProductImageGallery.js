import React, { useState } from "react";
import styles from "./ProductImageGallery.module.scss";
import Image from "next/image";

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0); // Add activeIndex state

  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setActiveIndex(index); // Update active index
  };

  return (
    <div className={styles.imageGallery}>
      <div className={styles.mainImageContainer}>
        <Image
          src={selectedImage}
          alt="Product Main Image"
          fill={true}
          style={{ objectFit: "contain" }}
          className={styles.mainImage}
        />
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => {
          const isActive = index === activeIndex; // Determine if thumbnail is active
          return (
            <div // Wrap the image in a div to apply the className
              key={index}
              className={`${styles.thumbnailWrapper} ${
                isActive ? styles.active : ""
              }`} // Apply classes
              onClick={() => handleThumbnailClick(image, index)} // Add onClick
            >
              <Image
                src={image}
                alt={`Product Thumbnail ${index + 1}`} // More descriptive alt text
                fill={false}
                className={styles.thumbnail}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;
