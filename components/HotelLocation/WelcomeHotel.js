import React from "react";
import styles from "../../styles/WelcomeHotel.module.scss";
import hotel1 from "../../public/images/hotel1.jpg";
import Image from "next/image";
const WelcomeHotel = () => {
  return (
    <div className={styles["welcome-hotel-section"]}>
      <div className={styles["welcome-hotel-content"]}>
        <div className={styles["content-left-right-part"]}>
          <div className={styles["content-left-part"]}>
            <div className={styles["left-image"]}>
              <Image src={hotel1} alt="img" />
            </div>
          </div>
          <div className={styles["content-right-part"]}>
            <h2>Welcome to <br/>Toronto downtown</h2>
            <p>
              Inspired by childhood memories and influenced by exotic spices.
              Naan & Kabob is a family dream of new home away from home.
            </p>
            <p>
              The family who followed the footsteps of the spice route merchants
              on a journey of a lifetime from Afghanistan in the East to Canada
              in the West through India and a few other countries.
            </p>
            <p>
              An enriching journey that set sail to the unknown and landed at
              Naan & Kabob.
            </p>
            <p>Enjoy!</p>
          </div>
        </div>
      </div>
      <button>See ALL LOCATIONS</button>
    </div>
  );
};

export default WelcomeHotel;
