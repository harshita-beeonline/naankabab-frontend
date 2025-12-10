import React from "react";
import styles from "../../styles/TheVisionary.module.scss";
import visionarymapimage from "../../public/images/visionarymapimage.png";
import Image from "next/image";

const TheVisionary = () => {
  return (
    <div className={styles["the-visionary-section"]}>
      <div className={styles["visionary-left-right-part"]}>
        <div className={styles["visionary-left-part"]}>
          <div className={styles["visionary-left-image"]}>
            <Image src={visionarymapimage} alt="img" />
          </div>
        </div>
        <div className={styles["visionary-right-part"]}>
          <h2>THE VISIONARY</h2>
          <p>
            A family with a legacy of culture, heritage, recipes and spices came
            from Afghanistan to Canada. Naan Kabob was the manifestation of
            their aspirations. A hub that connects civilizations through
            delicious food and soulful ambience and that relates with those who
            appreciate what it means ‘to feel at home’.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheVisionary;
