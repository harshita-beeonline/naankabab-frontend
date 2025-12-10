import React from "react";
import Image from "next/image";
import styles from "../../styles/OurLocationCards.module.scss";
import locationcard1 from "../../public/images/locationcard1.jpg";
import locationcard2 from "../../public/images/locationcard2.jpg";
import locationcard3 from "../../public/images/locationcard3.jpg";
import nklogo from "../../public/images/nklogo.svg";
import Link from "next/link";

const OurLocationCard = () => {
  const locationCardData = [
    {
      image: locationcard1,
      title: <>Dine-In at</>,
      details1:
        "Enjoy freshly grilled kabobs and aromatic rice in a warm, modern setting.",
      details2: "Inspired by Afghan hospitality feel at home with every bite.",
      details3: "Perfect for family meals or casual get-togethers.",
      buttontext: "Find your restaurant",
      icon: nklogo,
    },
    {
      image: locationcard2,
      title: <>Delivery</>,
      details1: "Hot and fresh Afghan dishes delivered to your door.",
      details2: "Great for work lunches or cozy nights in.",
      details3: "Easy ordering through your favorite delivery apps.",
      buttontext: "Order Delivery",
      icon: nklogo,
    },
    {
      image: locationcard3,
      title: (
        <>
          Order for
          <br />
          Pickup
        </>
      ),
      details1: "Order online, skip the wait.",
      details2: "Fresh, fast, and ready when you arrive.",
      details3: "Ideal for lunch breaks or meals on the go.",
      buttontext: "Order Pickup",
      icon: null,
    },
  ];

  return (
    <div className={styles["our-location-cards-section"]}>
      <div className={styles["our-location-all-cards-container"]}>
        {locationCardData.map((item, index) => (
          <Link href="#" key={index}>
            <div
              className={styles["our-location-card"]}
              style={{ backgroundImage: `url(${item.image.src})` }}
            >
              <div
                className={`${styles["icon-text"]} ${
                  index === 0
                    ? styles["icon-right"]
                    : index === 1
                    ? styles["icon-left"]
                    : styles["no-icon"]
                }`}
              >
                {index === 1 && item.icon && (
                  <Image src={item.icon} alt="logo" />
                )}
                <h2>{item.title}</h2>
                {index === 0 && item.icon && (
                  <Image src={item.icon} alt="logo" />
                )}
              </div>

              <p>{item.details1}</p>
              <p>{item.details2}</p>
              <p>{item.details3}</p>
              <button>{item.buttontext}</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurLocationCard;
