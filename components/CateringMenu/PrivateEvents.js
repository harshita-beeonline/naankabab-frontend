import React from "react";
import styles from "../../styles/PrivateEvents.module.scss";
import privateeventleftvector from "../../public/images/privateeventleftvector.svg";
import privateeventsimage from "../../public/images/privateeventsimage.png";
import Image from "next/image";
import buffetrightvector from "../../public/images/buffetrightvector.svg";

const PrivateEvents = () => {
  const cardData = [
    {
      title: "Perfect For:",
      list: [
        "Home gatherings & outdoor parties",
        "Weddings & community celebrations",
        "Small or large events, 20 – 200 guests",
      ],
    },
    {
      title: "What You’ll Love:",
      list: [
        "Elegant presentation, generous portions",
        "Fully customizable menus",
        "Optional on-site setup & service",
      ],
    },
  ];
  return (
    <div className={styles["private-events-section"]}>
      <div className={styles["left-side-vector-image"]}>
        <Image src={privateeventleftvector} alt="img" />
      </div>
            <div className={styles["right-side-vector-image"]}>
        <Image src={buffetrightvector} alt="img" />
      </div>
      <div className={styles["private-events-content"]}>
        <div className={styles["text-divider"]}>
          <h2>Private Events</h2>
          <div className={styles["divider"]}></div>
          <h6>Flavour That Feels Like Home</h6>
        </div>
        <p>
          Whether it’s a birthday, engagement, or family dinner, our dishes
          bring people closer — rich in flavour, beautifully presented, and made
          to share.
        </p>
        <div className={styles["all-private-events-cards"]}>
          {cardData.map((item, index) => (
            <div className={styles["private-events-card"]} key={index}>
              <h6>{item.title}</h6>
              {item.list.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles["private-events-image-section"]}>
        <div className={styles["private-events-bowl-image"]}>
          <Image src={privateeventsimage} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default PrivateEvents;
