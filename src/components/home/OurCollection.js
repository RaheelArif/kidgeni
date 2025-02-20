import React from "react";
import styles from "./OurCollection.module.scss";
import Image from "next/image";
import catImage from "/public/images/dummyCat.png"; // Replace with the actual cat image path
import { Row, Col } from "antd";
import Card from "./Card";
import BlackButton from "../ui/BlackButton";
import { PiArrowRight } from "react-icons/pi";

const OurCollection = ({ isDetail }) => {
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
          <h2 className={styles.title}>Our <span>Collection</span></h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {isDetail ? null : (
          <BlackButton
            isBlack={true}
            text="View All"
            icon={<PiArrowRight />}
            size="large"
            shape="round"
            // onClick={handleButtonClick}
            className="additional-class"
            iconStyle={{ color: "white", marginLeft: "5px" }} // Custom icon styles
            buttonStyle={{ backgroundColor: "blue" }} // Custom button styles
          />
        )}
      </div>
      <div className={`${styles.productsGrid} `}>
        <Row gutter={[24, 24]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OurCollection;
