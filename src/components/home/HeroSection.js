"use client";
import React, { useState, useRef } from "react";
import { Typography } from "antd";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import ArtImage from "/public/images/art.png";
import booksImage from "/public/images/books.png";
import doodlesImage from "/public/images/doodles.png";
import LearrnToImage from "/public/images/learn-to-draw.png";
import modelingImage from "/public/images/modeling.png";
import storiesImage from "/public/images/stories.png";

import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("3D modeling");
  const sliderRef = useRef(null);
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const filters = [
    {
      label: "3D modeling",
      image: modelingImage,
      value: "3D modeling",
      color: "#B4A7FF",
    },
    {
      label: "Art",
      image: ArtImage,
      value: "Art",
      color: "#93ACFE",
    },
    {
      label: "Stories",
      image: storiesImage,
      value: "Stories",
      color: "#FFBBF8",
    },
    {
      label: "Books",
      image: booksImage,
      value: "Books",
      color: "#C8E3FE",
    },
    {
      label: "Doodles",
      image: doodlesImage,
      value: "Doodles",
      color: "#DACFFD",
    },
    {
      label: "Learn-to-Draw",
      image: LearrnToImage,
      value: "Learn-to-Draw",
      color: "#B4A7FF",
    },
  ];

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    console.log(`Selected filter: ${value}`);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        canGoNext={canGoNext}
        onClick={() => sliderRef.current.slickNext()}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        canGoPrev={canGoPrev}
        onClick={() => sliderRef.current.slickPrev()}
      />
    ),
    afterChange: (current) => {
      setCanGoNext(current < filters.length - settings.slidesToShow);
      setCanGoPrev(current > 0);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.popularArtSectionContainer}>
      <div className={styles.titlesWrapper}>
        <Title level={2} className={styles.mainTitle}>
          Lorem Ipsum Dolor Sit Amet
        </Title>
      </div>
      <div className={styles.carouselWrapper}>
        <Slider {...settings} ref={sliderRef}>
          {filters.map((filter) => (
            <div
              key={filter.value}
              className={`${styles.card} ${
                selectedFilter === filter.value ? styles.selected : ""
              }`}
              style={{ backgroundColor: filter.color }}
              onClick={() => handleFilterChange(filter.value)}
            >
              <Image
                className={styles.cardImage}
                src={filter.image}
                alt="Art Icon"
              />
              <span className={styles.label}>{filter.label}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom next arrow component
export function SampleNextArrow({ canGoNext, onClick }) {
  return (
    <div
      className={`${styles["custom-arrow"]} ${styles["custom-next"]} ${
        !canGoNext ? styles["disabled"] : ""
      }`}
      style={{ pointerEvents: !canGoNext ? "none" : "auto" }}
      onClick={onClick}
    >
      {canGoNext && <FaArrowRight className={styles["arrow-icon"]} />}
    </div>
  );
}

// Custom previous arrow component
export function SamplePrevArrow({ canGoPrev, onClick }) {
  return (
    <div
      className={`${styles["custom-arrow"]} ${styles["custom-prev"]} ${
        !canGoPrev ? styles["disabled"] : ""
      }`}
      style={{ pointerEvents: !canGoPrev ? "none" : "auto" }}
      onClick={onClick}
    >
      {canGoPrev && <FaArrowLeft className={styles["arrow-icon"]} />}
    </div>
  );
}
export default HeroSection;
