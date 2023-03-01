import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={`${styles.footer} bg-secondary`}>
      Copyright © {year} - Commerce INC.
    </div>
  );
};

export default Footer;
