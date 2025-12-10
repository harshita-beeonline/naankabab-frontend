import React from "react";
import styles from "../../styles/SushiStyle.module.scss";
import Image from "next/image";
import sushileftvector from "../../public/images/sushileftvector.svg";
import sushikabob from "../../public/images/sushikabob.png";
import sharingplatters from "../../public/images/sharingplatters.png";
const SushiStyle = () => {
  const sushiItems = [
    [
      "HOUSE SALATA",
      "CHICKEN KOFTA",
      "FATTOUSH SALAD",
      "TANDOORI KABOB",
      "MANTU",
    ],
    ["SHAMI KABOB", "EGGPLANT BORANI", "CLASSIC CHICKEN", "TOMATO-SAUCED NAAN"],
    ["QABLI RICE", "YOGURT MINT DIP", "BASMATI RICE", "AVOCADO DIP"],
  ];

  return (
    <div className={styles["sushi-style-section"]}>
      <div className={styles["right-side-vector-image"]}>
        <Image src={sushileftvector} alt="" />
      </div>
      <div className={styles["sushi-content-section"]}>
        <div className={styles["sushi-details"]}>
          <div className={styles["sushi-text-divider"]}>
            <h2>KABOB SUSHI STYLE BITES</h2>
            <div className={styles["divider"]}></div>
            <div className={styles["minimum-price"]}>
              <h6>*Price : $110</h6>
              <h6>*Serves 8-10 People</h6>
            </div>
          </div>
          <p>
            Discover a unique twist on snacking with our Kabob Sushi-Style
            Bites. This delightful tray for 8-10 people combines the playful
            appeal of sushi with the rich flavours of Afghan kabobs, perfect for
            sparking creativity and enjoyment during gatherings.
          </p>
        </div>
      </div>
      <div className={styles["sushi-image-section"]}>
        <div className={styles["sushi-bowl-image"]}>
          <Image src={sushikabob} alt="img" />
        </div>
      </div>
      <div className={styles["sushi-content2-section"]}>
        <div className={styles["sushi-details"]}>
          <div className={styles["sushi-text-divider"]}>
            <h2>SHARING PLATTERS</h2>
            <div className={styles["divider"]}></div>
            <div className={styles["minimum-price"]}>
              <h6>*Each package serves 10 people</h6>
              <h6>*Price : $250 per package</h6>
            </div>
          </div>
          <p>
            Whether it’s a birthday, engagement, or family dinner, our dishes
            bring people closer — rich in flavour, beautifully presented, and
            made to share.
          </p>
          <div className={styles["sushi-items-section"]}>
            {sushiItems.map((column, colIndex) => (
              <ul key={colIndex} className={styles["sushi-items-column"]}>
                {column.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["sharing-image-section"]}>
        <div className={styles["sharing-bowl-image"]}>
          <Image src={sharingplatters} alt="img" />
        </div>
      </div>
      <div className={styles["order-button"]}>
        <button>Order Corporate Catering</button>
      </div>
    </div>
  );
};

export default SushiStyle;
