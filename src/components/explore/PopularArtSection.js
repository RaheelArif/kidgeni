"use client";
import React, { useState, useRef, useEffect } from "react";
import { Col, Row, Typography } from "antd";
import styles from "./PopularArtSection.module.scss";

import Image from "next/image";
import modelingImage from "/public/icons/modeling.png";
import ArtImage from "/public/icons/Art.png";
import StoriesImage from "/public/icons/Stories.png";
import BooksImage from "/public/icons/Books.png";
import DoodlesImage from "/public/icons/Doodles.png";
import drawImage from "/public/icons/Learn-to-Draw.png";
import dummyCatImage from "/public/images/dummyCat.png";
import PopularCard from "./PopularCard";
const { Title, Paragraph } = Typography;

const PopularArtSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("3D modeling");
  const cardsWrapperRef = useRef(null); // Create a ref for the cardsWrapper

  const filters = [
    {
      label: "3D modeling",
      icon: (
        <Image className={styles.cardImg} src={modelingImage} alt="Art Icon" />
      ),
      value: "3D modeling",
      color: "#B4A7FF",
    },
    {
      label: "Art",
      icon: <Image className={styles.cardImg} src={ArtImage} alt="Art Icon" />,
      value: "Art",
      color: "#93ACFE",
    },
    {
      label: "Stories",
      icon: (
        <Image className={styles.cardImg} src={StoriesImage} alt="Art Icon" />
      ),
      value: "Stories",
      color: "#FFBBF8",
    },
    {
      label: "Books",
      icon: (
        <Image className={styles.cardImg} src={BooksImage} alt="Art Icon" />
      ),
      value: "Books",
      color: "#C8E3FE",
    },
    {
      label: "Doodles",
      icon: (
        <Image className={styles.cardImg} src={DoodlesImage} alt="Art Icon" />
      ),
      value: "Doodles",
      color: "#DACFFD",
    },
    {
      label: "Learn-to-Draw",
      icon: <Image className={styles.cardImg} src={drawImage} alt="Art Icon" />,
      value: "Learn-to-Draw",
      color: "#B4A7FF",
    },
  ];

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    console.log(`Selected filter: ${value}`);
    // Here you would handle filtering logic
  };

  // Scroll to the right when component mounts
  useEffect(() => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollLeft =
        cardsWrapperRef.current.scrollWidth -
        cardsWrapperRef.current.offsetWidth;
    }
  }, []);

  return (
    <div className={styles.popularArtSectionContainer}>
      <div className={styles.titlesWrapper}>
        <Title level={2} className={styles.mainTitle}>
          Popular Art
        </Title>
        <Paragraph className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur
        </Paragraph>
      </div>
      <div className={styles.cardsScrollWrapper}>
        <div
          className={styles.cardsWrapper}
          ref={cardsWrapperRef} // Attach the ref to cardsWrapper
        >
          {filters.map((filter) => (
            <div
              key={filter.value}
              className={`${styles.card} ${
                selectedFilter === filter.value ? styles.selected : ""
              }`}
              style={{ backgroundColor: filter.color }}
              onClick={() => handleFilterChange(filter.value)}
            >
              <span>{filter.label}</span>
              <span className={styles.filterIcon}>{filter.icon}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="conatiner">
        <Row gutter={[16, 16]}>
        <Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col><Col  md={12} lg={6}>
            <PopularCard
              imageUrl={dummyCatImage}
              title="Cat Orange Standing"
              likes={100}
            />
          </Col>
       
        </Row>
      </div>
    </div>
  );
};

export default PopularArtSection;
