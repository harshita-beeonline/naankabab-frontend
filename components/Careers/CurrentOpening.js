import React from "react";
import styles from "../../styles/CurrentOpening.module.scss";
import Image from "next/image";
import currentopeningimage from "../../public/images/currentopeningimage.png";
import ourpromiseimage from "../../public/images/ourpromiseimage.jpg";
const CurrentOpening = () => {
  return (
    <>
      <div className={styles["current-opening-section"]}>
        <div className={styles["current-opening-left-right-part"]}>
          <div className={styles["current-opening-left-part"]}>
            <h2>Current Openings</h2>
            <p>
              Explore open roles at our restaurant locations across the GTA and
              beyond.<br/> Whether you’re looking to start your hospitality journey
              or take the next step in your career, we’d love to meet you.
            </p>
            <button>Apply Now</button>
          </div>

          <div className={styles["current-opening-right-part"]}>
            <div className={styles["current-opening-image"]}>
              <Image src={currentopeningimage} alt="img" />
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
      <div className={styles["our-promise-section"]}>
        <h2>Our Promise to Our Team</h2>
        <p>
          At Naan Kabob, we don’t just build restaurants - we build futures.<br/> We
          invest in our people the same way we invest in our food: with care,
          consistency, and pride. <br/>Because when our team grows, our community
          grows.
        </p>
        <div className={styles["our-promise-image"]}>
          <Image src={ourpromiseimage} alt="img" />
        </div>
      </div>
    </>
  );
};

export default CurrentOpening;
