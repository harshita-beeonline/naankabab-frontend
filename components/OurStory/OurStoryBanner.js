import React from "react";
import styles from "../../styles/OurStoryBanner.module.scss";
import ourstorycard1 from "../../public/images/ourstorycard1.jpg";
import ourstorycard2 from "../../public/images/ourstorycard2.jpg";
import ourstorycard3 from "../../public/images/ourstorycard3.jpg";
import Link from "next/link";
const OurStoryBanner = () => {
  const storyCardData = [
    {
      image: ourstorycard1,
      title: "What We\nStand For",
      details:
        "Naan Kabob started with one simple belief – that food brings people together. From our Afghan roots to our Canadian home, we’ve grown through care, flavor, and community.",
    },
    {
      image: ourstorycard2,
      title: "How It All\nBegan",
      details:
        "We celebrate heritage, honor craftsmanship, and create a place where everyone feels at home.",
    },
    {
      image: ourstorycard3,
      title: "Our Promise",
      details:
        "Crafted with authentic ingredients. Belong in a welcoming space. Evolving to serve better every day.",
    },
  ];
  return (
    <>
      <div className={styles["our-story-banner-section"]}>
        <div className={styles["story-banner-content"]}>
          <h2>OUR STORY</h2>
          <p>
            Rooted in Afghan hospitality, Naan Kabob blends traditional recipes
            with modern Canadian spirit. From handmade naan and sizzling kabobs
            to vibrant bowls and dips, every dish shares a story of warmth,
            migration, and home — bringing cultures, families, and generations
            together.
          </p>
        </div>
      </div>
      <div className={styles["our-story-cards-section"]}>
        <div className={styles["our-story-all-cards-container"]}>
          {storyCardData.map((item, index) => (
            <Link href={"#"} key={index}>
              <div
                className={styles["our-story-card"]}
                style={{
                  backgroundImage: `url(${item.image.src})`,
                }}
              >
                <h2>{item.title}</h2>
                <p>{item.details}</p>
                <button>Explore</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurStoryBanner;
