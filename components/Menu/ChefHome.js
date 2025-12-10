import styles from "../../styles/ChefHome.module.scss";
import chefselects from "../../public/images/chefselects.png";
import chefselects_rightbanner from "../../public/images/chefselects_rightbanner.png";
import homestyleentrees from "../../public/images/homestyleentrees.png";
import homestyleentrees_leftbanner from "../../public/images/homestyleentrees_leftbanner.png";
import Spicy from "../../public/images/Spicy.svg";
import Favorite from "../../public/images/Favorite.svg";
import Vegetarian from "../../public/images/Vegetarian.svg";
import Image from "next/image";

export default function ChefHome() {
  return (
    <div className={styles["chefhome-section"]}>
      <div className={styles["chefhome-section-first"]}>
        <Image
          src={chefselects_rightbanner}
          alt="chefselects_rightbanner"
          className={styles["chefselects_rightbanner"]}
          width={843}
          height={503}
        />
        <div className={styles["chefhome-conetnt-first"]}>
          <div className={styles["chefhome-conetnt-box"]}>
            <div>
              <h2>Chef Selects</h2>
              <p>
                Balanced plates that bring together flavour, craft, and
                experience.
              </p>
            </div>

            <div className={styles["chefhome-menu"]}>
              <div className={styles["chefhome-menu-heading-withprice"]}>
                <div className={styles["chefhome-menu-heading"]}>
                  <p className={styles["chefhome-menu-heading-text"]}>
                    Chicken LOVER
                  </p>
                  <Image src={Spicy} alt="Spicy" width={20} height={20} />
                  <Image src={Favorite} alt="Favorite" width={20} height={20} />
                </div>
                <p>$25.99</p>
              </div>
              <p>
                A trio of flavours: Classic Chicken, Spicy Tandoori Chicken, and
                savoury Chicken Kofta. Perfect for chicken enthusiasts!
              </p>
            </div>

            <div className={styles["chefhome-menu"]}>
              <div className={styles["chefhome-menu-heading-withprice"]}>
                <div className={styles["chefhome-menu-heading"]}>
                  <p className={styles["chefhome-menu-heading-text"]}>
                    BEEF LOVER
                  </p>
                  <Image src={Spicy} alt="Spicy" width={20} height={20} />
                  <Image src={Favorite} alt="Favorite" width={20} height={20} />
                </div>
                <p>$25.99</p>
              </div>
              <p>
                Enjoy Beef Tikka, Shami Kabob, and spicy Chaplee Kabob. Perfect
                for beef enthusiasts!
              </p>
            </div>
          </div>

          <div className={styles["chefhome-dish"]}>
            <Image
              src={chefselects}
              alt="chefselects"
              width={1140}
              height={510}
            />
          </div>
        </div>
      </div>

      <div className={styles["chefhome-section-second"]}>
        <Image
          src={homestyleentrees_leftbanner}
          className={styles["homestyleentrees_leftbanner"]}
          alt="homestyleentrees_leftbanner"
          width={897}
          height={536}
        />

        <div className={styles["chefhome-content-second"]}>
          <div className={styles["homestyleentrees"]}>
            <Image
              src={homestyleentrees}
              alt="homestyleentrees"
              width={585}
              height={518}
            />
          </div>
          <div className={styles["chefhome-content-second-box"]}>
            <div>
              <h2>Home style Entrees</h2>
              <p>
                Slow-cooked dishes, crafted with patience and care for authentic
                taste.
              </p>
            </div>

            <div className={styles["chefhome-menu"]}>
              <div className={styles["chefhome-menu-heading-withprice"]}>
                <div className={styles["chefhome-menu-heading"]}>
                  <p className={styles["chefhome-menu-heading-text"]}>
                    qabli lamb shank
                  </p>
                  <Image src={Favorite} alt="Favorite" width={20} height={20} />
                </div>
                <p>$21.99</p>
              </div>
              <p className={styles["p"]}>
                Juicy and tender, slow cooked lamb shank seasoned with authentic
                Afghan spices. Served with qabli rice and side of channa masala.
              </p>
            </div>

            <div className={styles["chefhome-menu"]}>
              <div className={styles["chefhome-menu-heading-withprice"]}>
                <div className={styles["chefhome-menu-heading"]}>
                  <p className={styles["chefhome-menu-heading-text"]}>
                    channa dinner
                  </p>
                  <Image src={Spicy} alt="Spicy" width={20} height={20} />
                  <Image src={Favorite} alt="Favorite" width={20} height={20} />
                </div>
                <p>$15.99</p>
              </div>
              <p className={styles["p"]}>
                An authentic mildly seasoned chickpea stew, served with qabli
                rice, salad and naan.
              </p>
            </div>
            <div className={styles["chefhome-menu"]}>
              <div className={styles["chefhome-menu-heading-withprice"]}>
                <div className={styles["chefhome-menu-heading"]}>
                  <p className={styles["chefhome-menu-heading-text"]}>
                    Chaplee PLATE
                  </p>
                  <Image src={Spicy} alt="Spicy" width={20} height={20} />
                  <Image src={Favorite} alt="Favorite" width={20} height={20} />
                </div>
                <p>$19.99</p>
              </div>
              <p className={styles["p"]}>
                Two house patties made of spicy seasoned beef, served with
                Basmati rice, NK salad and fresh naan.
              </p>
            </div>
            <div className={styles["chefhome-menu"]}>
              <div className={styles["chefhome-menu-heading-withprice"]}>
                <div className={styles["chefhome-menu-heading"]}>
                  <p className={styles["chefhome-menu-heading-text"]}>
                    CHANNA WITH BOLANEE
                  </p>
                  <Image src={Spicy} alt="Spicy" width={20} height={20} />
                  <Image
                    src={Vegetarian}
                    alt="Vegetarian"
                    width={20}
                    height={20}
                  />
                </div>
                <p>$8.99</p>
              </div>
              <p className={styles["p"]}>
                Crispy Afghan flatbread filled with flavor, served alongside
                hearty spiced chickpeas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
