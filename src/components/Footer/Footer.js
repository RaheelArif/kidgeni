import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <a href="#" className={styles.footerLink}>
          Plans
        </a>
        <a href="#" className={styles.footerLink}>
          Product
        </a>
        <a href="#" className={styles.footerLink}>
          Explore
        </a>
        <a href="#" className={styles.footerLink}>
          Support
        </a>
      </nav>
      <h1 className={styles.logo}>Lorem <span style={{color:"white"}}>Ipsum</span></h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur. </p>
    </footer>
  );
}
