"use client"

import React from "react";
import Image from "next/image";
import styles from "../../styles/AfganFlavourMenu.module.scss";

import afganflavourmenu1 from "../../public/images/afganflavourmenu1.png";
import afganflavourmenu2 from "../../public/images/afganflavourmenu2.png";
import afganflavourmenu3 from "../../public/images/afganflavourmenu3.png";
import afganflavourmenu4 from "../../public/images/afganflavourmenu4.png";
import afganflavourmenu5 from "../../public/images/afganflavourmenu5.png";
import afganflavourmenu6 from "../../public/images/afganflavourmenu6.png";
import { useRouter } from "next/navigation";

const cards = [
  {
    id: 1,
    image: afganflavourmenu1,
    title:
      "Exploring Mediterranean Food in Scarborough: A Journey Through Flavor...",
    subtitle: "Experience Mediterranean flavor and charm in Scarborough.",
    desc: "Discover Scarborough’s hidden Mediterranean gems — from family-run taverns serving warm pit...",
  },
  {
    id: 2,
    image: afganflavourmenu2,
    title:
      "Discover Authentic Afghan Flavours at Naan Kabob – Scarborough Town Centre",
    subtitle: "Experience Mediterranean flavor and charm in Scarborough.",
    desc: "Discover Scarborough’s hidden Mediterranean gems — from family-run taverns serving warm pit...",
  },
  {
    id: 3,
    image: afganflavourmenu3,
    title:
      "Discover the Best Restaurants in Mississauga: A Guide to Exceptional Din...",
    subtitle: "Experience Mediterranean flavor and charm in Scarborough.",
    desc: "Discover Scarborough’s hidden Mediterranean gems — from family-run taverns serving warm pit...",
  },
  {
    id: 4,
    image: afganflavourmenu4,
    title:
      "How Naan Kabob Blends Afghan and Mediterranean Cuisine into Toronto’s Fa...",
    subtitle: "Experience Mediterranean flavor and charm in Scarborough.",
    desc: "Discover Scarborough’s hidden Mediterranean gems — from family-run taverns serving warm pit...",
  },
  {
    id: 5,
    image: afganflavourmenu5,
    title:
      "Afghan Food in Woodbridge: A Culinary Journey Through Tradition, Flavour...",
    subtitle: "Experience Mediterranean flavor and charm in Scarborough.",
    desc: "Discover Scarborough’s hidden Mediterranean gems — from family-run taverns serving warm pit...",
  },
  {
    id: 6,
    image: afganflavourmenu6,
    title:
      "Authentic Afghan Cuisine in Mississauga: A Guide to Naan Kabob’s Mississauga Lo...",
    subtitle: "Experience Mediterranean flavor and charm in Scarborough.",
    desc: "Discover Scarborough’s hidden Mediterranean gems — from family-run taverns serving warm pit...",
  },
];

export default function AfganFlavourMenu() {

  const router = useRouter();

  const handleReadMore =()=>{
    router.push("/individaul-blog")
  }

  return (
    <section className={styles["afgan-section"]}>
      <div className={styles["afgan-header"]}>
        <h2>Discovering the Flavors of Afghanistan at Naan Kabob</h2>
        <a href="#">View all</a>
      </div>

      <div className={styles["grid"]}>
        {cards.map((card) => (
          <div key={card.id} className={styles["card"]} >
            <div className={styles["imageWrapper"]}>
              <Image
                src={card.image}
                alt={card.title}
                width={380}
                height={221}
                className={styles["cardImage"]}
              />
            </div>
            <div className={styles["cardContent"]}>
              <div>
                <h3>{card.title}</h3>
                <p className={styles["subtitle"]}>{card.subtitle}</p>
              </div>
              <p className={styles["description"]}>{card.desc}</p>
              <button className={styles["readMoreBtn"]} onClick={handleReadMore}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
