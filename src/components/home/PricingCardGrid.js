"use client";

import React, { useState } from "react";
import { Row, Col } from "antd";
import PricingCard from "./PricingCard";
import { AiFillBulb } from "react-icons/ai";
import { FaHandSparkles } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { PiRocketLaunchFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
const PricingCardGrid = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // State for selected card
  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const cards = [
    {
      planType: "Starter Plan",
      price: "Free",
      icon: <FaLightbulb />,
      usage: [
        "3D Models: 10 tokens/model",
        "1 token per use (Art, Stories, Doodles, Coloring Pages, etc.)",
      ],
      description: "For casual creators exploring different features.",
    },
    {
      planType: "Fun Creator Plan",
      price: "$8.99",
      icon: <FaHandSparkles />,
      usage: [
        "Flexible usage across all features",
        "Up to 20 3D models (10 tokens/model) or mixed use of other features",
      ],
      usage2: [
        "10% discount on token top-ups",
        "10% discount on product orders (3D model or bazzle and more )",
      ],
      bonus: true,
      description: "For casual creators exploring different features.",
    },
    {
      planType: "Super Creator Plan ",
      price: "$13.99",
      icon: <MdElectricBolt />,

      usage: [
        "Flexible usage across all features",
        "Up to 40–50 3D models or broader use of other features",
      ],
      usage2: [
        "20% discount on token top-ups",
        "20% discount on all products, plus free shipping for orders",
      ],
      bonus: true,

      description: "For casual creators exploring different features.",
    },
    {
      planType: "Family/Education Creator Plan",
      price: "$29.99",
      icon: <PiRocketLaunchFill />,

      usage: [
        "Flexible usage across all features",
        "Up to 100+ 3D models or extensive use of other features",
   
      ],
      usage2: [
        "30% discount on token top-ups",
        "25% discount on all products, plus free shipping for orders",
        "Collaborative perks (multiple user profile)",
      ],
      bonus: true,

      description: "For casual creators exploring different features.",
    },
  ];

  return (
    <Row gutter={[24, 24]}>
      {cards.map((card, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
          <PricingCard
            {...card}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PricingCardGrid;
