import React from "react";
import styles from "./MovingPlans.module.scss";
import Image from "next/image";
import cloudIcon from "/public/icons/cloudIcon.png";

const MovingPlans = () => {
  return (
    <div className={styles.movingPlansContainer}>
      <span className={styles.movingText}>plans</span>
      <Image
        src={cloudIcon}
        alt="Cloud Icon"
        className={styles.movingIcon}
        width={130}
        height={130}
      />
      <span className={styles.movingText}>plans</span>
      <Image
        src={cloudIcon}
        alt="Cloud Icon"
        className={styles.movingIcon}
        width={130}
        height={130}
      />
      <span className={styles.movingText}>plans</span>
      <Image
        src={cloudIcon}
        alt="Cloud Icon"
        className={styles.movingIcon}
        width={130}
        height={130}
      />
      <span className={styles.movingText}>plans</span>
      <Image
        src={cloudIcon}
        alt="Cloud Icon"
        className={styles.movingIcon}
        width={130}
        height={130}
      />
      <span className={styles.movingText}>plans</span>
      <Image
        src={cloudIcon}
        alt="Cloud Icon"
        className={styles.movingIcon}
        width={130}
        height={130}
      />
       <span className={styles.movingText}>plans</span>
      <Image
        src={cloudIcon}
        alt="Cloud Icon"
        className={styles.movingIcon}
        width={130}
        height={130}
      />
       <span className={styles.movingText}>plans</span>
      <Image
        src={cloudIcon}
        alt="Cloud Icon"
        className={styles.movingIcon}
        width={130}
        height={130}
      />
    </div>
  );
};

export default MovingPlans;