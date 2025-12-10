import styles from "../../styles/BowlsSalads.module.scss";
import left_img from "../../public/images/BowlsSalads-left-img.png";
import right_img from "../../public/images/BowlsSalads-right-img.png";
import dishesh from "../../public/images/BowlsSalads-dishesh.png";
import Favorite from "../../public/images/Favorite.svg";
import Vegetarian from "../../public/images/Vegetarian.svg";
import Vegan from "../../public/images/Vegan.svg";
import Spicy from "../../public/images/Spicy.svg";
import Gluten_free from "../../public/images/Gluten free.svg";
import nk_icon from "../../public/images/BowlsSalads-nk-icon.svg";
import Image from "next/image";

export default function BowlsSalads() {
  return (
    <div className={styles["BowlsSalads-section"]}>
      <Image src={left_img} alt="left_img" className={styles["left_img"]} />

      <div className={styles["BowlsSalads-content"]}>
        <div className={styles["BowlsSalads-content-left"]}>
          <div>
            <h2>Bowls & Salads</h2>
            <p>
              Fresh, colourful, and on-trend - a modern take on flavour and
              balance.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>Afghan Bowl</p>
                <Image src={Favorite} alt="Favorite" />
              </div>
              <p className={styles["info-heading-label"]}>$18.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              Fresh romaine, spring mix and optional qabli rice with our special
              dressing. Topped with avocado dip, red pepper hummus dip, pickled
              cabbage, crispy chickpeas, Afghan salata, baby cucumbers, and your
              choice of protein.
            </p>
          </div>

          <div className={styles["info-unique"]}>
            <p>Choose Your Base:</p>
            <span>Spring Bowl: Salad only</span> <br />
            <span>Power Bowl: Salad and qabli rice</span>
          </div>

          <div className={styles["info-unique"]}>
            <p className={styles["info-heading-label"]}>Choose Your Protein:</p>
            <div className={styles["info-submenu"]}>
              <div className={styles["info-submenu-with-icon"]}>
                Tandoori{" "}
                <Image src={Spicy} alt="Spicy" width={15} height={15} />
              </div>
              |<div>Shami </div>|<div>Classic Chicken </div>|
              <div className={styles["info-submenu"]}>
                Paneer{" "}
                <Image
                  src={Vegetarian}
                  alt="Vegetarian"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>Fattoush salad</p>
                <Image src={Vegan} alt="Vegan" />
              </div>
              <p className={styles["info-heading-label"]}>$11.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              Crisp lettuce, tomatoes, bell peppers and cucumbers tossed with
              crunchy pita chips in a tart and slightly sweet olive oil and
              lemon dressing. Gluten-free option available
            </p>
          </div>

          <div className={styles["info-unique"]}>
            <p className={styles["info-heading-label"]}>Additions:</p>
            <div className={styles["info-submenu"]}>
              <div className={styles["info-submenu-with-price"]}>
                Shami <span>$4.99</span>
              </div>
              |
              <div className={styles["info-submenu-with-price"]}>
                Chicken <span>$5.99</span>
              </div>
              |
              <div className={styles["info-submenu-with-price"]}>
                Paneer <span>$6.99</span>
              </div>
            </div>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <Image src={nk_icon} alt="nk_icon" width={30} height={30} />
                <p className={styles["info-heading-label"]}>Chopped Salad</p>
                <Image src={Vegan} alt="Vegan" />
                <Image src={Gluten_free} alt="Gluten_free" />
              </div>
              <p className={styles["info-heading-label"]}>$9.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              A colorful mix of crisp lettuce, juicy tomatoes, diced onions,
              cilantro, and tangy pickled cabbage, all chopped and tossed in our
              signature NK dressing.
            </p>
          </div>
        </div>

        <div className={styles["BowlsSalads-content-right"]}>
          <Image src={dishesh} alt="dishesh" width={580} height={742} />
        </div>
      </div>
      <Image src={right_img} alt="right_img" className={styles["right_img"]} />
    </div>
  );
}
