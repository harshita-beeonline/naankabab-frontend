import React from "react";
import styles from "../../styles/OurPromise.module.scss";
import Image from "next/image";
import ourpromise1 from '../../public/images/ourpromise1.jpg';
import ourpromise2 from '../../public/images/ourpromise2.jpg';
const OurPromise = () => {
  return (
    <div className={styles["our-promise-section"]}>
      <div className={styles["our-promise-left-right-part"]}>
        <div className={styles["our-promise-left-part"]}>
          <h2>Our Promise to Franchisees</h2>
          <li>Comprehensive training and ongoing operational support</li>
          <li>Proven menu and supply chain model</li>
          <li>National marketing and brand programs</li>
          <li>Turnkey design and construction guidance</li>
          <li>Exclusive territory protection</li>
          <div className={styles["our-promise-image"]}>
            <Image src={ourpromise1} alt="img" />
          </div>
        </div>
        <div className={styles["our-promise-right-part"]}>
          <div className={styles["our-promise-image"]}>
            <Image src={ourpromise2} alt="img" />
          </div>
          <h2>What We Look For</h2>
          <p>
            We’re seeking partners, not just investors - individuals who share
            our passion for people, quality, and growth.Ideal franchisees are:
          </p>
          <li>Experienced in business or hospitality management</li>
          <li>Committed to hands-on leadership and operational excellence</li>
          <li>Financially prepared for multi-unit growth</li>
          <li>Driven to represent a brand built on integrity and care</li>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
