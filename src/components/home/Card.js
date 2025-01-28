import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";


export default function Card({product}) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <span className={styles.inStock}>In-Stock</span>
        <Image
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productCat}>Lorem Ipsum</p>
        <p className={styles.productTitle}>{product.title}</p>
        <p className={styles.productPrice}>{product.price}</p>
      </div>
    </div>
  );
}
