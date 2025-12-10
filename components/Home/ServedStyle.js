import React from "react";
import styles from "../../styles/ServedStyle.module.scss";
import servedimage from "../../public/images/servedimage.jpg";
import Image from "next/image";

const ServedStyle = () => {
  return (
    <div className={styles["served-style-section"]}>
      <div className={styles["served-section-left-right-part"]}>
        <div className={styles["served-section-left-part"]}>
          <div className={styles["severd-image"]}>
            <Image src={servedimage} alt="img" />
          </div>
        </div>
        <div className={styles["served-section-right-part"]}>
          <h5>Crafted with Care,</h5>
          <h2>Served with Style</h2>
          <p>
            We start with the finest halal ingredients, sourced locally and
            prepared daily. Our kitchens blend time-honoured Afghan techniques
            with contemporary presentation to create food that feels both
            comforting and elevated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServedStyle;
