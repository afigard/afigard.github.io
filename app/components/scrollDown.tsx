"use client";

import React from "react";
import Image from "next/image";
import styles from "../ui/page.module.css";

const ScrollDown = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <p className={styles.scrollText}>scroll down</p>
      <div onClick={handleScrollToBottom} className={styles.scroll}>
        <Image
          src="/scroll-down.webp"
          width={50}
          height={50}
          alt="GIF of an arrow pointing down, slightly bouncing"
          unoptimized
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default ScrollDown;
