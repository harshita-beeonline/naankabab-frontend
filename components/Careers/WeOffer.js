import React from "react";
import styles from "../../styles/WeOffer.module.scss";
import weofferimage from "../../public/images/weofferimage.jpg";
import partimage from "../../public/images/partimage.jpg";
import Image from "next/image";

const WeOffer = () => {
  return (
    <div className={styles["we-offer-section"]}>
      <div className={styles["we-offer-left-right-part"]}>
        <div className={styles["we-offer-left-part"]}>
          <h2>What We Offer</h2>
          <li>Competitive pay and growth opportunities</li>
          <li>Training and development programs</li>
          <li>A supportive and friendly team environment</li>
          <li>Flexible scheduling and work-life balance</li>
          <li>Staff meals and family discounts</li>
          <li>Leadership and advancement pathways across our growing chain</li>
          <div className={styles["we-offer-image"]}>
            <Image src={weofferimage} alt="img" />
          </div>
        </div>
        <div className={styles["we-offer-right-part"]}>
          <div className={styles["we-offer-image"]}>
            <Image src={partimage} alt="img" />
          </div>
          <h2>Be Part of <br/>Something Bigger</h2>
          <p>
            Our mission is simple: to share Afghan warmth with every guest, one
            plate at a time. If you’re passionate about great food, great
            people, and meaningful work, there’s a place for you here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
