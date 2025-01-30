// src/components/CartItem.js
import React from "react";
import styles from "./CartItem.module.scss"; // Create a separate SCSS module for CartItem
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <Image src={item.image} alt={item.title} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <div>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemPrice}>${item.price}</p>
        </div>
        <div className={styles.quantitySelector}>
          <button
            className={styles.quantityButton}
            // onClick={handleDecrement}
            aria-label="Decrement quantity"
          >
            <span className={styles.minus}>-</span>
          </button>
          <span className={styles.quantityValue}>{item.quantity}</span>
          <button
            className={styles.quantityButton}
            // onClick={handleIncrement}
            aria-label="Increment quantity"
          >
            <span className={styles.plus}>+</span>
          </button>
        </div>
          <div className={styles.deleeIcon}>
            <MdDeleteOutline />
          </div>
      </div>
    </div>
  );
};

export default CartItem;
