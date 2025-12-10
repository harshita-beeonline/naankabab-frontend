"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/HomeBanner.module.scss";
import homebanner1 from "../../public/images/homebanner1.jpg";
import homebanner2 from "../../public/images/homebanner2.jpg";
import homebanner3 from "../../public/images/homebanner3.jpg";
import Image from "next/image";

const HomeBanner = () => {
  const images = [homebanner1, homebanner2, homebanner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className={styles["home-banner-section"]}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles["banner-slide"]} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <Image
            src={img}
            alt={`Banner ${index + 1}`}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      <div className={styles["banner-content"]}>
        <h6>MODERN</h6>
        <h2>AFGHAN KITCHEN</h2>
        <h5>
          Inspired by Afghan roots. Crafted for today’s taste — fresh, halal,
          and proudly Canadian.
        </h5>
          <h4>View Menu</h4>
          <h4>Catering & Events</h4>
      </div>
    </div>
  );
};

export default HomeBanner;
