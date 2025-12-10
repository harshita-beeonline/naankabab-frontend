import styles from "../../styles/Appetizers.module.scss";
import left_img from "../../public/images/appetizers-left-img.png";
import right_img from "../../public/images/appetizers-right-img.png";
import dishesh from "../../public/images/appetizers-dishesh.png";
import Favorite from "../../public/images/Favorite.svg";
import Vegetarian from "../../public/images/Vegetarian.svg";
import Vegan from "../../public/images/Vegan.svg";
import Image from "next/image";

export default function Appetizers() {
  return (
    <div className={styles["appetizers-section"]}>
      <Image src={left_img} alt="left_img" className={styles["left_img"]} />

      <div className={styles["appetizers-content"]}>
        <div className={styles["appetizers-content-left"]}>
          <Image src={dishesh} alt="dishesh" width={638} height={750} />
        </div>
        <div className={styles["appetizers-content-right"]}>
          <div>
            <h2>Appetizers</h2>
            <p>
              Traditional favourites that start every meal with comfort and
              flavour.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>Eggplant borani</p>
                <Image src={Favorite} alt="Favorite" />
              </div>
              <p className={styles["info-heading-label"]}>$12.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              Pan-fried eggplant topped with homemade tomato sauce, garlic
              yogurt and mint. Served with naan. Vegan option available.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>Mantu</p>
                <Image src={Favorite} alt="Favorite" />
              </div>
              <p className={styles["info-heading-label"]}>
                <span>small</span> $11.99 | <span>large</span> $16.99
              </p>
            </div>
            <p className={styles["info-heading-text"]}>
              Dumplings filled with ground beef and sautéed onions. Topped with
              savoury sautéed split peas, ground beef sauce, and garlic yogurt.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>BOLANEE</p>
                <Image src={Vegetarian} alt="Vegetarian" />
              </div>
              <p className={styles["info-heading-label"]}>
                <span>small</span> $6.99 | <span>large</span> $9.99
              </p>
            </div>
            <p className={styles["info-heading-text"]}>
              Grilled flatbread stuffed with potatoes, generously seasoned with
              fresh herbs and aromatic spices, served with a side of yogurt.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>
                  Crispy Mini Samosa
                </p>
                <Image src={Vegetarian} alt="Vegetarian" />
              </div>
              <p className={styles["info-heading-label"]}>$8.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              A crispy golden samosa filled with a savoury mix of
              bolanee-inspired mashed potatoes, green onions, herbs, and Afghan
              spices, served with a side of cool, tangy yogurt sauce for the
              perfect dip.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>
                  Spicy masala Crinkle fries
                </p>
                <Image src={Vegan} alt="Vegan" />
              </div>
              <p className={styles["info-heading-label"]}>$5.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              Crispy golden fries seasoned with our signature house-made chili
              spice blend for a bold, fiery kick.
            </p>
          </div>

          <div className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <div className={styles["info-subheading"]}>
                <p className={styles["info-heading-label"]}>Crinkle fries</p>
                <Image src={Vegan} alt="Vegan" />
              </div>
              <p className={styles["info-heading-label"]}>$4.99</p>
            </div>
            <p className={styles["info-heading-text"]}>
              Crispy, golden fries with a light seasoning, simple, classic, and
              always satisfying.
            </p>
          </div>
        </div>
      </div>
      <Image src={right_img} alt="right_img" className={styles["right_img"]} />
    </div>
  );
}
