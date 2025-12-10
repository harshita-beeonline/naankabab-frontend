"use client";
import React, { useState } from "react";
import styles from "../../styles/MenuCards.module.scss";
import Image from "next/image";
import menucard1 from "../../public/images/menucard1.jpg";
import menucard2 from "../../public/images/menucard2.jpg";
import menucard3 from "../../public/images/menucard3.jpg";

export default function MenuCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      img: menucard1,
      title: "CRAFTED FRESH EVERY DAY",
      desc: "From sizzling kabob plates to hand-baked naan, our food is made daily with quality you can taste.",
    },
    {
      img: menucard2,
      title: "SOMETHING FOR EVERYONE",
      desc: "Plates, wraps, bowls, and appetizers – each inspired by the flavors of Afghanistan and loved in Canada.",
    },
    {
      img: menucard3,
      title: "ORDER YOUR FAVORITES",
      desc: "Enjoy Naan Kabob your way – dine in, take out, or order online for pickup or delivery.",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles["menu-cards"]}>
      {cards.map((card, index) => (
        <div
          className={`${styles["menu-card"]} ${
            activeIndex === index ? styles["active"] : ""
          }`}
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <div className={styles["image-wrapper"]}>
            <Image
              src={card.img}
              alt={card.title}
              width={340}
              height={466}
              className={styles["menu-image"]}
            />
            <h3 className={styles["card-title"]}>{card.title}</h3>
            <div className={styles["overlay"]}>
              <p>{card.desc}</p>
              <button>EXPLORE</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
