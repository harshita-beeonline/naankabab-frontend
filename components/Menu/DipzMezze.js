import styles from "../../styles/Dipsmezze.module.scss";
import left_img from "../../public/images/dips-mezze-left-img.png";
import right_img from "../../public/images/dips-mezze-right-img.png";
import dishesh from "../../public/images/dipz-mezze-dishesh.png";
import Image from "next/image";

export default function Dipsmezze() {
  return (
    <div className={styles["dipz-mezze-section"]}>
      <Image src={left_img} alt="left" className={styles["left_img"]} />

      <div className={styles["dipz-mezze-content"]}>
        <div className={styles["dipz-mezze-content-left"]}>
          <div>
            <h2>Dips & Mezze</h2>
            <p>
              House-made spreads, rich and vibrant best enjoyed with fresh naan.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <p className={styles["info-heading-label"]}>Smoky Baba Ghanouj</p>
              <p className={styles["info-heading-label"]}>$9.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              A rich and velvety blend of fire-roasted eggplant, infused with
              deep, smoky flavours. Perfectly paired with warm, fresh naan for
              the ultimate dip experience.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <p className={styles["info-heading-label"]}>Smoky Baba Ghanouj</p>
              <p className={styles["info-heading-label"]}>$9.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              A rich and velvety blend of fire-roasted eggplant, infused with
              deep, smoky flavours. Perfectly paired with warm, fresh naan for
              the ultimate dip experience.
            </p>
          </div>

          <div className={styles["something-to-share"]}>Something To Share</div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <p className={styles["info-heading-label"]}>Smoky Baba Ghanouj</p>
              <p className={styles["info-heading-label"]}>$9.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              A rich and velvety blend of fire-roasted eggplant, infused with
              deep, smoky flavours. Perfectly paired with warm, fresh naan for
              the ultimate dip experience.
            </p>
          </div>
        </div>

        <div className={styles["dipz-mezze-content-right"]}>
          <Image
            src={dishesh}
            alt="dishesh"
            width={627}
            height={568}
          />
        </div>
      </div>

      <Image src={right_img} alt="right" className={styles["right_img"]} />
    </div>
  );
}
