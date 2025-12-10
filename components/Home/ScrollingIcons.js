import React from "react";
import styles from "../../styles/ScrollingIcons.module.scss";
import scroll1 from "../../public/images/scroll1.svg";
import scroll2 from "../../public/images/scroll2.svg";
import scroll3 from "../../public/images/scroll3.svg";
import scroll4 from "../../public/images/scroll4.svg";
import scroll5 from "../../public/images/scroll5.svg";
import scroll6 from "../../public/images/scroll6.svg";
import scroll7 from "../../public/images/scroll7.svg";
import scroll8 from "../../public/images/scroll8.svg";
import scroll9 from "../../public/images/scroll9.svg";
import scroll10 from "../../public/images/scroll10.svg";
import scroll11 from "../../public/images/scroll11.svg";
import Image from "next/image";const ScrollingIcons = () => {
  const svgIcons = [
    scroll1,
    scroll2,
    scroll3,
    scroll4,
    scroll5,
    scroll6,
    scroll7,
    scroll8,
    scroll9,
    scroll10,
    scroll11,
    scroll1,
    scroll2,
    scroll3,
    scroll4,
    scroll5,
    scroll6,
    scroll7,
    scroll8,
    scroll9,
    scroll10,
    scroll11,
  ];
  return (
   <div className={styles["scrolling-icons-section"]}>
     <div className={styles["svg-company-logo-cards"]}>
      <div className={styles["scroll-container"]}>
        <div className={styles["scroll-content"]}>
          {svgIcons.concat(svgIcons).map((item, index) => (
            <div className={styles["svg-card"]} key={index}>
              <div className={styles["main-image-box"]}>
                <Image src={item} alt="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default ScrollingIcons;
