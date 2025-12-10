import React from "react";
import styles from "../../styles/CateringCards.module.scss";
import cateringcard1 from "../../public/images/cateringcard1.jpg";
import cateringcard2 from "../../public/images/cateringcard2.jpg";
import cateringcard3 from "../../public/images/cateringcard3.jpg";
import Link from "next/link";
const CateringCards = () => {
  const cateringCardData = [
    {
      image: cateringcard1,
      title: (
        <>
          Corporate
          <br />
          Catering
        </>
      ),
    },
    {
      image: cateringcard2,
      title: (
        <>
          Private
          <br />
          Events
        </>
      ),
    },
    {
      image: cateringcard3,
      title: (
        <>
          Crafted
          <br />
          with Care
        </>
      ),
    },
  ];
  return (
    <div className={styles["catering-cards-section"]}>
      <h2>Catering That Brings People Together</h2>
      <p>
        From office lunches to family celebrations, Naan Kabob brings the warmth
        of Afghan hospitality wherever you gather.
      </p>
      <div className={styles["all-catering-cards-section"]}>
        {cateringCardData.map((item, index) => (
          <Link href={"#"} key={index}>
            <div
              className={styles["catering-card"]}
              style={{
                backgroundImage: `url(${item.image.src})`,
              }}
            >
              <h2>{item.title}</h2>
              <button>Explore</button>
            </div>
          </Link>
        ))}
      </div>
      <h6>Crafted with Care. Served with Style. Sharing Made Simple.</h6>
      <div className={styles["order-both-button"]}>
        <button className={styles["order-button"]}>Order Now</button>
        <button className={styles["request-button"]}>Request a Quote</button>
      </div>
    </div>
  );
};

export default CateringCards;
