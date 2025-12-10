import React from "react";
import styles from "../../styles/Overview.module.scss";
import Image from "next/image";
import overviewimage from "../../public/images/overviewimage.jpg";

const Overview = () => {
  return (
    <>
      <div className={styles["franchise-overview-section"]}>
        <div className={styles["franchise-overview-left-right-part"]}>
          <div className={styles["franchise-overview-left-part"]}>
            <h2>Investment Overview</h2>
            <p>
              Each Naan Kabob location is designed for high-quality, efficient
              operations and memorable guest experiences.
            </p>
            <p>
              While investment may vary based on market and size, franchise
              opportunities typically require:
            </p>
            <div className={styles["list-data"]}>
              <li>Franchise Fee: Starting at $75,000</li>
              <li>Royalty Fee: 6% of gross sales</li>
              <li>Marketing Contribution: 2% of gross sales</li>
              <li>
                Initial Investment: $1m- $1.5m (depending on size and buildout)
              </li>
            </div>
          </div>
          <div className={styles["franchise-overview-right-part"]}>
            <div className={styles["overview-image"]}>
              <Image src={overviewimage} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["be-part-section"]}>
        <h2>Be Part of Something Bigger</h2>
        <p>
          This is more than a business - it’s a chance to bring Afghan warmth
          and flavor to new communities, and to grow with a brand that’s
          evolving globally.
        </p>
        <p>Join us in building a Borderless Afghan Kitchen where everyone feels they belong.</p>
        <button>Apply to Franchise</button>
        <p>or contact franchise@naankabob.ca to start the conversation.</p>
      </div>
    </>
  );
};

export default Overview;
