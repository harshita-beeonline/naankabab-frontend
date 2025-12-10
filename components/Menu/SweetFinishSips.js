import styles from "../../styles/SweetFinishSips.module.scss";
import desserts from "../../public/images/desserts.png";
import drinks from "../../public/images/drinks.png";
import left_img_pattern from "../../public/images/dips-mezze-left-img.png";
import SweetFinishSipsPattern from "../../public/images/SweetFinishSipsPattern.png";
import nk_icon from "../../public/images/BowlsSalads-nk-icon.svg";
import Image from "next/image";

export default function SweetFinishSips() {
  return (
    <div className={styles["SweetFinishSips-section"]}>
      <div className={styles["SweetFinishSips-section-first"]}>
        <Image
          src={left_img_pattern}
          alt="left_img_pattern"
          className={styles["pattern-left"]}
        />
        <div className={styles["SweetFinishSips-section-content"]}>
          <div className={styles["SweetFinishSips-section-content-box"]}>
            <div>
              <h2>Sweet Finish</h2>
              <p>
                Every meal ends with something sweet a tradition of tea, treats,
                and togetherness.
              </p>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p className={styles["info-heading-label"]}>
                  SAFFRON PISTACHIO iCE CREAM
                </p>
                <p className={styles["info-heading-label"]}>$9.99</p>
              </div>
              <p className={styles["info-heading-text"]}>
                Rich saffron blended with creamy pistachios - a fragrant, nutty
                treat to end your meal.
              </p>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p className={styles["info-heading-label"]}>FIRNI</p>
                <p className={styles["info-heading-label"]}>$5.99</p>
              </div>
              <p className={styles["info-heading-text"]}>
                A sweet cardamom pudding - a delicious finale to your meal.
              </p>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p className={styles["info-heading-label"]}>Baklava</p>
                <p className={styles["info-heading-label"]}>$11.99</p>
              </div>
              <p className={styles["info-heading-text"]}>
                A sweet and buttery filo pastry filled with nuts - a sweet treat
                either after, or before your meal.
              </p>
            </div>
          </div>

          <div className={styles["desserts"]}>
            <Image src={desserts} alt="desserts" width={627} height={441} />
          </div>
        </div>
        <Image
          src={SweetFinishSipsPattern}
          alt="SweetFinishSipsPattern"
          className={styles["pattern-right"]}
          width={558}
          height={772}
        />
      </div>

      <div className={styles["SweetFinishSips-section-second"]}>
        <Image
          src={SweetFinishSipsPattern}
          alt="SweetFinishSipsPattern"
          className={styles["pattern-bottom-left"]}
          width={558}
          height={772}
        />
        <div className={styles["SweetFinishSips-section-content"]}>
          <div className={styles["drinks"]}>
            <Image src={drinks} alt="drinks" width={638} height={550} />
          </div>
          <div className={styles["SweetFinishSips-section-content-box"]}>
            <div>
              <h2>Sips</h2>
              <p>
                From smooth to sparkling - refreshing drinks to complete your
                meal.
              </p>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p className={styles["info-heading-label"]}>Mango Smoothie</p>
                <p className={styles["info-heading-label"]}>$6.99</p>
              </div>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p className={styles["info-heading-label"]}>Doogh</p>
                <p className={styles["info-heading-label"]}>$4.99</p>
              </div>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p className={styles["info-heading-label"]}>Soft Drink Cans</p>
                <p className={styles["info-heading-label"]}>$2.99</p>
              </div>
              <p className={styles["info-heading-text"]}>
                (Pepsi, Diet Pepsi, Pepsi Zero, Crush Orange, Ginger Ale, 7 Up,
                Brisk)
              </p>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p
                  className={styles["info-heading-label"]}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    margin: 0,
                  }}
                >
                  <Image
                    src={nk_icon}
                    alt="nk_icon"
                    width={35}
                    height={35}
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                  Bottled Water
                </p>

                <p className={styles["info-heading-label"]}>$2.49</p>
              </div>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p
                  className={styles["info-heading-label"]}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    margin: 0,
                  }}
                >
                  <Image
                    src={nk_icon}
                    alt="nk_icon"
                    width={35}
                    height={35}
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                  Sparkling Water
                </p>
                <p className={styles["info-heading-label"]}>$2.99</p>
              </div>
              <p className={styles["info-heading-text"]}>(Original, Lime)</p>
            </div>

            <div className={styles["info"]}>
              <div className={styles["info-heading"]}>
                <p className={styles["info-heading-label"]}>BOTTLED JUICE</p>
                <p className={styles["info-heading-label"]}>$3.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
