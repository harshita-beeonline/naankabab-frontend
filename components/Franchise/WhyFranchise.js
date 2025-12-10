import React from "react";
import styles from "../../styles/WhyFranchise.module.scss";
import restaurantimage from "../../public/images/restaurantimage.jpg";
import Image from "next/image";

const WhyFranchise = () => {
  const cardData = [
    {
      title: "A Proven Brand",
      details:
        "With over a decade of success across the GTA, Naan Kabob has become a household name for quality, authenticity, and care. Our brand is trusted, recognized, and loved by diverse communities.",
    },
    {
      title: "Modern Afghan Kitchen",
      details:
        "We celebrate Afghan culture in a modern way - blending tradition with innovation. Our food is handcrafted daily, our service is warm, and our atmosphere reflects the heart of hospitality.",
    },
    {
      title: "Strong Systems and Support",
      details:
        "From site selection and training to marketing and operations, our dedicated corporate team is with you every step of the way. We’ve built our success on structure, consistency, and partnership.",
    },
    {
      title: "Growing Market, Global Vision",
      details:
        "The demand for authentic, high-quality dining experiences is rising. With established success in Canada, we’re expanding across North America and into global markets - including the GCC and Europe.",
    },
  ];
  return (
    <div className={styles["why-franchise-section"]}>
      <div className={styles["why-franchise-image"]}>
        <Image src={restaurantimage} alt="img" />
      </div>
      <div className={styles["why-franchise-cards-section"]}>
        <h2>Why Franchise With Naan Kabob?</h2>
        <div className={styles["why-franchise-all-cards"]}>
            {
                cardData.map((item,index)=>(
                    <div className={styles["why-franchise-card"]} key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.details}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default WhyFranchise;
