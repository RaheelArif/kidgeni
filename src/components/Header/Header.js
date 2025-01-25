"use client"; // <-- Add this line at the top
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { PiArrowRight, PiBasket } from "react-icons/pi";
import { Button } from "antd";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <button className={styles.cartButton}>
          <PiBasket />
        </button>
        <Button
          shape="round"
          size="large"
    
          className={styles.customSignInButton}
        >
          Sign up
          <div className={styles.customArrow}>
            <PiArrowRight />
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
