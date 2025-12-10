import styles from "../../styles/FeastPlatters.module.scss";
import groupplatters from "../../public/images/groupplatters.png";
import festplatterrightbanner from "../../public/images/festplatterrightbanner.png";
import Spicy from "../../public/images/Spicy.svg";
import Favorite from "../../public/images/Favorite.svg";
import nk_icon from "../../public/images/BowlsSalads-nk-icon.svg";
import Image from "next/image";

export default function FeastPlatters() {
  return (
    <div className={styles["feastplatters-section"]}>
      <Image
        src={festplatterrightbanner}
        alt="festplatterrightbanner"
        className={styles["festplatterrightbanner"]}
        width={355}
        height={558}
      />
      <div className={styles["feastplatters-section-content"]}>
        <div className={styles["feastplatters-content-left"]}>
          <div>
            <h2>Feast Platters</h2>
            <p>
              Generous spreads made for sharing - perfect for family and team
              gatherings.
            </p>
          </div>

          <div className={styles["feastplatters-info"]}>
            <div className={styles["feastplatters-info-heading"]}>
              <Image src={nk_icon} alt="nk_icon" />
              <p>MIX</p>
              <Image src={Favorite} alt="Favorite" />
            </div>
            <div className={styles["feastplatters-info-subheading"]}>
              <div className={styles["data"]}>
                <p>Full $119.99</p>
                <span>for 4-5 ppl</span>
              </div>
              <div className={styles["line"]}></div>
              <div className={styles["data"]}>
                <p>Half platter $72.99</p>
                <span>for 2-3 ppl</span>
              </div>
            </div>
            <p className={styles["p"]}>
              Indulge in a rich and diverse selection of Afghan flavours,
              perfect for sharing. Our NK Mix Platter is served with qabli rice,
              grilled tomato, salad, naan and fries. It offers a generous feast
              of:
            </p>
            <ul>
              <li>
                <span>
                  Tandoori Chicken{" "}
                  <Image src={Spicy} alt="Spicy" width={15} height={15} />
                </span>
              </li>
              <li>Classic Chicken Breast</li>
              <li>
                <span>
                  Chicken Kofta{" "}
                  <Image src={Spicy} alt="Spicy" width={15} height={15} />
                </span>
              </li>
              <li>
                <span>
                  Shami Kabob{" "}
                  <Image src={Spicy} alt="Spicy" width={15} height={15} />
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  Chaplee{" "}
                  <Image src={Spicy} alt="Spicy" width={15} height={15} />
                </span>
              </li>
            </ul>
          </div>

          <div className={styles["feastplatters-info"]}>
            <div className={styles["feastplatters-info-heading"]}>
              <p>KABIB LOVERS</p>
            </div>
            <div className={styles["feastplatters-info-subheading"]}>
              <div className={styles["data"]}>
                <p>Full $119.99</p>
                <span>for 4-5 ppl</span>
              </div>
              <div className={styles["line"]}></div>
              <div className={styles["data"]}>
                <p>Half platter $72.99</p>
                <span>for 2-3 ppl</span>
              </div>
            </div>
            <p className={styles["p"]}>
              Experience the ultimate kabob feast designed for those who crave a
              variety of flavours. Our Kabob Lover platter is served with qabli
              rice, grilled tomato, salad, naan and fries. Perfect for sharing,
              this abundant spread includes:
            </p>
            <ul>
              <li>
                <span>
                  {" "}
                  Mantu <Image src={Spicy} alt="Spicy" width={15} height={15} />
                </span>
              </li>
              <li>Beef Tikka Kabob</li>
              <li>
                <span>
                  Classic Chicken Breast{" "}
                  <Image src={Spicy} alt="Spicy" width={15} height={15} />
                </span>
              </li>
              <li>Chicken Kofta</li>
              <li>
                <span>
                  Shami Kabob{" "}
                  <Image src={Spicy} alt="Spicy" width={15} height={15} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["feastplatters-content-right"]}>
          <Image
            src={groupplatters}
            alt="groupplatters"
            width={683}
            height={764}
          />
        </div>
      </div>
    </div>
  );
}
