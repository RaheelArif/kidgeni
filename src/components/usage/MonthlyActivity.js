// MonthlyActivity.jsx
import React from "react";

import styles from "./MonthlyActivity.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";
import starImg from "/public/icons/usage-star.png";
import modelImg from "/public/icons/model-icn.png";
import otherImg from "/public/icons/other-icn.png";
import UsageItem from "./UsageItem";

const MonthlyActivity = () => {
  return (
    <div className={styles.ContainerM1}>
      <div className={styles.monthlyActivityContainer}>
        <Row className={styles.monthlyActivityRow} gutter={[20, 20]}>
          {" "}
          {/* gutter adds spacing between the cards */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className={styles.coinBalanceCard}>
              <div className={styles.coinBalanceContent}>
                <div className={styles.coinBalanceValue}>
                  50 <Image src={starImg} alt="STar" />
                </div>
                <span className={styles.coinBalanceLabel}>Coins Balance</span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={16} lg={16}>
            <div className={styles.activityStats}>
              <h2>Monthly Activity</h2>
              <div className={styles.activityContainer2}>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>
                    <Image src={modelImg} alt="STar" />
                  </span>
                  <div>
                    <span className={styles.statValue}>50</span>
                    <span className={styles.statLabel}>Model Generated</span>
                  </div>
                </div>

                <div
                  style={{ background: "#F7FEDD" }}
                  className={styles.statCard}
                >
                  <span className={styles.statIcon}>
                    {/* Replace with an actual icon component or SVG */}
                    <Image src={otherImg} alt="STar" />
                  </span>
                  <div>
                    <span className={styles.statValue}>100</span>
                    <span className={styles.statLabel}>Other</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>{" "}
      </div>
      <div className={styles.myPageContainer21}>
        <h2 className={styles.title21}>Usage Data</h2>
        <div className={styles.container21}>
          <div className={styles.heading21}>
            {/* <h4 className={styles.empty}></h4> */}
            <h4 className={styles.itemOne}>Name</h4>
            <h4 className={styles.itemTwo}>Fitur</h4>
            <h4 className={styles.itemThree}>Model</h4>
            <h4 className={styles.itemFour}>Used Coin</h4>
          </div>
          <UsageItem
            name="Lorem Ipsum Dolor"
            fitur="Lorem Ipsum"
            model="Lorem Ipsum"
            usedCoin={3}
          />
          <UsageItem
            name="Lorem Ipsum Dolor"
            fitur="Lorem Ipsum"
            model="Lorem Ipsum"
            usedCoin={3}
          />
          {/* Add more UsageItem components here */}
        </div>
      </div>
    </div>
  );
};

export default MonthlyActivity;
