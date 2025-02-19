// src/components/CartItem.js
import React from "react";
import styles from "./CartItem.module.scss"; // Create a separate SCSS module for CartItem
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
const CartItem = ({ item, bgFalse, borderBottom, btn2 }) => {
  return (
    <div
      style={{
        background: bgFalse ? "transparent" : "#EDE7FE",
        borderBottom: borderBottom ? "1px solid black" : "none",
        borderRadius: borderBottom ? "0px" : "20px",
      }}
      className={styles.cartItem}
    >
      <Image src={item.image} alt={item.title} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <div>
          <p className={styles.smallTiitle}>Lorem Ipsum</p>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemPrice}>${item.price}</p>
        </div>
        <div className={styles.quantityContaner}>
          {btn2 ? (
            <div className={styles.quantitySelector2}>
              <button
                className={styles.quantityButton2}
                // onClick={handleDecrement}
                aria-label="Decrement quantity"
              >
                <span className={styles.minus}>-</span>
              </button>
              <span className={styles.quantityValue}>{item.quantity}</span>
              <button
                className={styles.quantityButton2}
                // onClick={handleIncrement}
                aria-label="Increment quantity"
              >
                <span className={styles.plus}>+</span>
              </button>
            </div>
          ) : (
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
          )}
          <div className={styles.deleeIcon}>
            <MdDeleteOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
