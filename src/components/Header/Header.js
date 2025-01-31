"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { PiArrowRight, PiBasket } from "react-icons/pi";
import { Button } from "antd";
import CartDrawer from "./CartDrawer"; // Import the CartDrawer component
import BlackButton from "../ui/BlackButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCartDrawer = () => {
    setIsCartDrawerOpen(true);
  };

  const closeCartDrawer = () => {
    setIsCartDrawerOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Lorem <span className={styles.logoItalic}>Ipsum</span>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <a
          href="/plans"
          className={styles.navLink}
          onClick={isMenuOpen ? toggleMenu : () => {}}
        >
          Plans
        </a>
        <a
          href="/product"
          className={styles.navLink}
          onClick={isMenuOpen ? toggleMenu : () => {}}
        >
          Product
        </a>
        <a
          href="/explore"
          className={styles.navLink}
          onClick={isMenuOpen ? toggleMenu : () => {}}
        >
          Explore
        </a>
        <a
          href="/support"
          className={styles.navLink}
          onClick={isMenuOpen ? toggleMenu : () => {}}
        >
          Support
        </a>
      </nav>
      <div className={styles.actions}>
        <button className={styles.cartButton} onClick={openCartDrawer}>
          <PiBasket />
        </button>
        <BlackButton 
        isBlack={true}
        text="Sign Up" 
        icon={<PiArrowRight />} 
        size="large" 
        shape="round" 
        // onClick={handleButtonClick} 
        className="additional-class" 
        iconStyle={{ color: 'white', marginLeft: '5px' }} // Custom icon styles
        buttonStyle={{ backgroundColor: 'blue' }} // Custom button styles
      />
      <CartDrawer visible={isCartDrawerOpen} onClose={closeCartDrawer} />
      </div>

      {/* Use the CartDrawer component */}
    </header>
  );
};

export default Header;
