import React, { useState } from "react";
import CustomBlackTabs from "../ui/CustomBlackTabs";
import styles from "./Usage.module.scss";
import ThemeTabs from "../ui/ThemeTabs";
import UsageCard from "./UsageCard";
import catImg from "/public/images/cat2.png";
import { Row, Col } from "antd";

export default function Usage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabItems2 = [
    { label: "All", key: "all" },
    { label: "3D Modelling", key: "3dModelling" },
    { label: "Art", key: "art" },
    { label: "Stories", key: "stories" },
    { label: "Books", key: "books" },
    { label: "Doodles", key: "doodles" },
    { label: "Learn-to-draw", key: "learnToDraw" },
  ];

  const handleTabClick = (key) => {
    setActiveTab(key);
    console.log(`Tab ${key} clicked: ${key}`);
    // Add your logic to handle tab clicks
  };
  const tabItems = [
    { label: "Token usage", key: "tokenUsage" },
    { label: "Monthly activity", key: "monthlyActivity" },
  ];

  // Dummy data for UsageCards (replace with your actual data)
  const cardData = [
    { imageUrl: catImg, title: "Lorem Ipsum 1", category: "3D Modelling" },
    { imageUrl: catImg, title: "Lorem Ipsum 2", category: "Art" },
    { imageUrl: catImg, title: "Lorem Ipsum 3", category: "Stories" },
    { imageUrl: catImg, title: "Lorem Ipsum 4", category: "Books" },
    { imageUrl: catImg, title: "Lorem Ipsum 5", category: "Doodles" },
    { imageUrl: catImg, title: "Lorem Ipsum 6", category: "Learn-to-draw" },
    { imageUrl: catImg, title: "Lorem Ipsum 7", category: "3D Modelling" },
    { imageUrl: catImg, title: "Lorem Ipsum 8", category: "Art" },
    { imageUrl: catImg, title: "Lorem Ipsum 9", category: "Stories" },
    { imageUrl: catImg, title: "Lorem Ipsum 10", category: "Books" },
    { imageUrl: catImg, title: "Lorem Ipsum 11", category: "Doodles" },
    { imageUrl: catImg, title: "Lorem Ipsum 12", category: "Learn-to-draw" },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Usage <span>Tracking</span>
        </h1>
        <CustomBlackTabs tabItems={tabItems}></CustomBlackTabs>
      </div>

      <div className={styles.dataContainer}>
        <ThemeTabs tabItems={tabItems2} onTabClick={handleTabClick} />
        <Row className={styles.cardRow} gutter={[20, 20]}>
          {" "}
          {/* gutter adds spacing between the cards */}
          {cardData.map((card, index) => (
            <Col xs={24} sm={12} md={8} lg={8} key={index}>
              {" "}
              {/* 3 cards per row on medium and larger screens */}
              <UsageCard
                imageUrl={card.imageUrl}
                title={card.title}
                category={card.category}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
