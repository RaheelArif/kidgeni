"use client";
import React, { useState } from "react";
import styles from "./PopularCard.module.scss";
import {
  HeartOutlined,
  BookOutlined,
  HeartFilled,
  BookFilled,
} from "@ant-design/icons";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";

const PopularCard = ({ imageUrl, title, likes }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt={title} className={styles.image} />
      {isHovered && (
        <div className={styles.overlay}>
          <div className={styles.topIcons}>
            <span className={styles.icon}>
              <FaRegBookmark />
            </span>
            <span className={styles.likeCount}>
              {likes}
              <span className={styles.iconHeart}>
                <HeartOutlined />
              </span>
            </span>
          </div>
          <div className={styles.title}>{title}</div>
        </div>
      )}
    </div>
  );
};

export default PopularCard;
