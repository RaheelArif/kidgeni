import React from "react";
import styles from "./PricingCard.module.scss";

import { TiTick } from "react-icons/ti";
const PricingCard = ({ planType, price, usage, description, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardC1}>
        <div className={styles.cardContainer1}>
          <div className={styles.iconContainer}>{icon}</div>
          <h4 className={styles.planType}>{planType}</h4>{" "}
        </div>
        <div className={styles.priceDetails}>
          <h2 className={styles.price}>{price}</h2>
          <span className={styles.month}>16/month</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.UsageT}>Usage</div>

        <div className={styles.usage}>
          {usage.map((item, index) => (
            <div key={index} className={styles.usageItem}>
              <span className={styles.checkMark}>
                <TiTick />
              </span>{" "}
              {item}
            </div>
          ))}
        </div>
        <div className={styles.description}>{description}</div>
      </div>{" "}

        <button className={styles.getStartedButton}>
          Get Started <span className={styles.arrowIcon}>→</span>
        </button>
 
    </div>
  );
};

export default PricingCard;
