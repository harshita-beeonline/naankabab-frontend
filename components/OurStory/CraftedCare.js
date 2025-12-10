import React from "react";
import styles from "../../styles/CraftedCare.module.scss";
import craftedcareimage from "../../public/images/craftedcareimage.jpg";
import Image from "next/image";

const CraftedCare = () => {
  return (
    <div className={styles["crafted-care-section"]}>
      <div className={styles["crafted-care-left-right-part"]}>
        <div className={styles["crafted-care-left-part"]}>
          <div className={styles["craf-care-image"]}>
            <Image src={craftedcareimage} alt="image"/>
          </div>
        </div>
        <div className={styles["crafted-care-right-part"]}>
          <h3>Crafted with Care.</h3>
          <h3>Shared with Heart.</h3>
          <h3>Evolving Together.</h3>
          <p>
            Naan Kabob began with a simple belief - that food should bring
            people together, no matter where they come from.
          </p>
          <p>
            Our founders came to Canada carrying more than recipes; they carried
            the memories of Afghanistan - the aroma of charcoal-grilled kabobs,
            the warmth of fresh naan, and the spirit of hospitality where every
            guest is treated like family.
          </p>
          <p>
            What started as a single kitchen with bold dreams has grown into a
            movement - a modern Afghan kitchen built on craftsmanship,
            community, and care. Each plate we serve is a story of tradition
            meeting today - crafted with authentic flavors, served with pride,
            and reimagined for a new generation.
          </p>
          <p>
            From the sizzling of our tandoors to the laughter that fills our
            dining rooms, every moment at Naan Kabob reflects what we stand for
            - belonging.
          </p>
          <p>
            Here, cultures meet, stories are shared, and people feel at home -
            whether it’s your first visit or your hundredth.
          </p>
          <p>
            As we continue to grow across Canada and beyond, our purpose stays
            true: to celebrate Afghan heritage through flavor, hospitality, and
            innovation. Because food is more than a meal - it’s a connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CraftedCare;
