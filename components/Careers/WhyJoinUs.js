import React from "react";
import styles from "../../styles/WhyJoinUs.module.scss";
import whyjoinimage from "../../public/images/whyjoinimage.jpg";
import Image from "next/image";

const WhyJoinUs = () => {
  return (
    <div className={styles["why-joinus-section"]}>
      <div className={styles["why-joinus-image"]}>
        <Image src={whyjoinimage} alt="img" />
      </div>
      <div className={styles["why-joinus-content"]}>
        <h2>Why Join Naan Kabob?</h2>
        <div className={styles["divider"]}></div>
        <div className={styles["content-box"]}>
          <h6>Crafted with Purpose</h6>
          <p>
            We take pride in our craft - from the quality of our food to the
            details of every guest experience. You’ll learn from experts who are
            passionate about what they do and dedicated to doing it right.
          </p>
          <h6>A Place to Belong</h6>
          <p>
            When you join Naan Kabob, you’re joining a community. We celebrate
            diversity, friendship, and teamwork. Here, you’re valued not just
            for your skills, but for who you are.
          </p>
          <h6>Evolving Together</h6>
          <p>
            We’re a brand that’s growing across Canada and beyond. That means
            new opportunities, new ideas, and new ways to build your future.
            Whether you start at the front counter or in the kitchen, your
            journey with us can go as far as your ambition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
