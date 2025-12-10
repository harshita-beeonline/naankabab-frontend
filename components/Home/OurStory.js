"use client";
import React from "react";
import styles from "../../styles/OurStory.module.scss";
import Link from "next/link";
const OurStory = () => {
  return (
    <div className={styles["ourstory-section-container"]}>
      <div className={styles["ourstory-content-section"]}>
        <div className={styles["left-right-content-section"]}>
          <div className={styles["left-content-section"]}>
            <h2>Our Story</h2>
            <h5>Served Fresh.</h5>
          </div>
          <div className={styles["divider"]}></div>
          <div className={styles["right-content-section"]}>
            <div className={styles["para-content"]}>
              <p>
                Born from the rich heritage of Afghan hospitality, Naan Kabob
                brings together old-world recipes and modern Canadian spirit.
                From our handmade naan and sizzling kabobs to vibrant bowls and
                dips, every dish tells a story — one of migration, warmth, and
                home. At Naan Kabob, food isn’t just a meal — it’s a bridge
                between cultures, families, and generations.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["discovery-button"]}>
        <Link href={"/our-story"}><button>Discover Our Story </button></Link>
      </div>
    </div>
  );
};

export default OurStory;
