import React from "react";
import Image from "next/image";
import styles from "../../styles/BuffetStyles.module.scss";
import buffeticon1 from "../../public/images/buffeticon1.svg";
import buffeticon2 from "../../public/images/buffeticon2.svg";
import buffeticon3 from "../../public/images/buffeticon3.svg";


const BuffetStyle = () => {
  const cardData = [
    {
      title: "CLASSIC $25.99 / person",
      items: [
        { name: "Chicken breast", icon1: null, icon2: null, icon3: null },
        {
          name: "Tandoori chicken breast",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        { name: "Shami kabob", icon1: null, icon2: null, icon3: null },
        {
          name: "Grilled tomatoes",
          icon1: buffeticon1,
          icon2: buffeticon2,
          icon3: buffeticon3,
        },
        {
          name: "Afghan chana",
          icon1: buffeticon1,
          icon2: buffeticon2,
          icon3: buffeticon3,
        },
        { name: "Rice", icon1: null, icon2: null, icon3: null },
        { name: "Fries", icon1: null, icon2: null, icon3: null },
        { name: "Naan", icon1: buffeticon1, icon2: null, icon3: null },
        {
          name: "Salad",
          icon1: buffeticon1,
          icon2: buffeticon2,
          icon3: buffeticon3,
        },
        {
          name: "Red chutney & kabob dip",
          icon1: null,
          icon2: null,
          icon3: null,
        },
      ],
    },
    {
      title: "SIGNATURE $27.99 / person",
      items: [
        { name: "Mantu", icon1: null, icon2: null, icon3: null },
        { name: "Eggplant borani", icon1: null, icon2: null, icon3: null },
        {
          name: "Tandoori chicken breast",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        { name: "Shami kabob", icon1: null, icon2: null, icon3: null },
        {
          name: "Afghan chana",
          icon1: buffeticon1,
          icon2: buffeticon2,
          icon3: buffeticon3,
        },
        {
          name: "Grilled tomatoes and eggplant",
          icon1: buffeticon1,
          icon2: buffeticon2,
          icon3: buffeticon3,
        },
        { name: "Qabli rice", icon1: null, icon2: null, icon3: null },
        { name: "Fries", icon1: null, icon2: null, icon3: null },
        { name: "Naan", icon1: buffeticon1, icon2: null, icon3: null },
        {
          name: "Salad",
          icon1: buffeticon1,
          icon2: buffeticon2,
          icon3: buffeticon3,
        },
        {
          name: "Red chutney & kabob dip",
          icon1: null,
          icon2: null,
          icon3: null,
        },
      ],
    },
    {
      title: "PREMIUM ADD-ONS",
      items: [
        {
          name: "Eggplant borani\u00A0\u00A0\u00A0$3/person",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Bolanee\u00A0\u00A0\u00A0$2.5/person",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Fattoush salad\u00A0\u00A0\u00A0$3/person",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Mantu\u00A0\u00A0\u00A0$3/person",
          icon1: null,
          icon2: null,
          icon3: null,
        },

        { name: "DESSERTS", isLabel: true },
        {
          name: "Firni\u00A0\u00A0\u00A0$3/person",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Bolanee\u00A0\u00A0\u00A0$2/person",
          icon1: null,
          icon2: null,
          icon3: null,
        },

        { name: "DRINKS", isLabel: true },
        {
          name: "Mango smoothie\u00A0\u00A0\u00A0$6.99",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Doogh\u00A0\u00A0\u00A0$4.99",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Soft drinks\u00A0\u00A0\u00A0$2.59",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Bottled water\u00A0\u00A0\u00A0$2.59",
          icon1: null,
          icon2: null,
          icon3: null,
        },
        {
          name: "Sparkling water\u00A0\u00A0\u00A0$2.59",
          icon1: null,
          icon2: null,
          icon3: null,
        },
      ],
    },
  ];

  return (
    <div className={styles["buffet-style-section"]}>
      <div className={styles["buffet-content-box"]}>
        <div className={styles["buffet-text-divider"]}>
          <h2>BUFFET STYLE</h2>
          <div className={styles["divider"]}></div>
          <div className={styles["minimum-price"]}>
            <h6>Catering trays, served in buffet style</h6>
            <h6>*Minimun 10 orders</h6>
          </div>
        </div>
        <div className={styles["buffet-all-cards"]}>
          {cardData.map((card, index) => (
            <div key={index} className={styles["buffet-card"]}>
              <h3>{card.title}</h3>
              {card.items.map((item, i) => (
                <li
                  key={i}
                  className={`${styles.buffetItem} ${
                    item.isLabel ? styles.label : ""
                  }`}
                >
                  {item.isLabel ? (
                    <strong>{item.name}</strong>
                  ) : (
                    <>
                      <span>{item.name}</span>
                      <div className={styles["all-icons"]}>
                        {item.icon1 && <Image src={item.icon1} alt="icon1" />}
                        {item.icon2 && <Image src={item.icon2} alt="icon2" />}
                        {item.icon3 && <Image src={item.icon3} alt="icon3" />}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button>Book Private Event Catering</button>
    </div>
  );
};

export default BuffetStyle;
