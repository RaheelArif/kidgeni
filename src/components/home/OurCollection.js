import React from "react";
import styles from "./OurCollection.module.scss";
import Image from "next/image";
import catImage from "/public/images/dummyCat.png"; // Replace with the actual cat image path
import { Row, Col } from "antd";
import Card from "./Card";

const OurCollection = () => {
  const products = [
    {
      id: 1,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    {
      id: 2,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    {
      id: 3,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    {
      id: 4,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    {
      id: 5,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    {
      id: 6,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    {
      id: 7,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    {
      id: 8,
      image: catImage,
      title: "Lorem Ipsum Dolor sit Amet",
      price: "$8.99",
    },
    // ... you can add more products here
  ];

  return (
    <div className={styles.collectionContainer}>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h2 className={styles.title}>Our Collection</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <button className={styles.viewAllButton}>
          View All <span className={styles.arrowIcon}>→</span>
        </button>
      </div>
      <div className={`${styles.productsGrid} container`}>
        <Row gutter={[24, 24]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OurCollection;
