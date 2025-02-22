// UsageItem.jsx
import React from "react";
import Image from "next/image";
import styles from "./UsageItem.module.scss";
import dummyCat from "/public/images/dummyCat.png";
import starImg from "/public/icons/usage-star.png";

const UsageItem = ({ name, fitur, model, usedCoin }) => {
  return (
    <div className={styles.usageItemContainer}>
      <div className={styles.nameColumn}>
        <Image
          src={dummyCat}
          alt={name}
          width={40} // Adjust as needed
          height={40} // Adjust as needed
          className={styles.catImage}
        />
        <span>{name}</span>
      </div>
      <div className={styles.fiturColumn}>{fitur}</div>
      <div className={styles.modelColumn}>{model}</div>
      <div className={styles.usedCoinColumn}>
        <span className={styles.coinIcon}>
          <Image src={starImg} alt="STar" />
        </span>
        {usedCoin}
      </div>
    </div>
  );
};

export default UsageItem;
