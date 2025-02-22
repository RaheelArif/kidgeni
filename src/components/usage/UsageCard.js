// UsageCard.jsx
import React from 'react';
import Image from 'next/image';
import styles from './UsageCard.module.scss';



const UsageCard = ({ imageUrl, title, category }) => {
  return (
    <div className={styles.cardContainer}>
      {/* <div className={styles.imageWrapper}> */}
        <Image
          src={imageUrl}
          alt={title}
          className={styles.image}
        />
      {/* </div> */}
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.category}>{category}</div>
      </div>
    </div>
  );
};

export default UsageCard;