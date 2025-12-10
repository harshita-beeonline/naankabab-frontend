import Image from "next/image";
import styles from "../../styles/Handhelds.module.scss";
import HandheldsPattern from "../../public/images/HandheldsPatterns.png";
import HandheldsDish from "../../public/images/HandheldsDish.png";
import Spicy from "../../public/images/Spicy.svg";
import Favorite from "../../public/images/Favorite.svg";
import Vegetarian from "../../public/images/Vegetarian.svg";

export default function Handhelds() {
  return (
    <section className={styles["handhelds-section"]}>
      {/* patterns */}
      <Image
        src={HandheldsPattern}
        alt="pattern-left"
        className={styles["pattern-left"]}
        width={600}
        height={400}
        priority
      />
      <Image
        src={HandheldsPattern}
        alt="pattern-right"
        className={styles["pattern-right"]}
        width={600}
        height={400}
        priority
      />

      <div className={styles["handhelds-content"]}>
        {/* left visuals */}
        <div className={styles["handhelds-content-left"]}>
          <Image
            src={HandheldsDish}
            alt="Handhelds dishes"
            width={624}
            height={597}
            className={styles["dish-image"]}
            priority
          />
        </div>

        {/* right card */}
        <div className={styles["handhelds-content-right"]}>
          <header className={styles["handhelds-heading"]}>
            <h2>Handhelds</h2>
            <p>
              Smashed fresh burgers on naan and soft lavash wraps – bold
              flavours made handheld.
            </p>
          </header>

          {/* Item 1 */}
          <article className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <h3 className={styles["info-heading-label"]}>Naan Burger</h3>
              <p className={styles["info-heading-label"]}>$11.99</p>
            </div>

            <p className={styles["combo-pill"]}>Combo $15.99</p>

            <p className={styles["info-heading-text"]}>
              Beef patty with caramelized onions, creamy white sauce, and a soft
              naan bun — rich, bold, and irresistibly delicious.
            </p>

            <p className={styles["choose-protein"]}>Choose your protein:</p>

            <div className={styles["choose-protein-info"]}>
              <div className={styles["choose-protein-info-one"]}>
                Spicy Chaplee <Image src={Spicy} alt="Spicy" width={15} height={15}/>{" "}
                <Image src={Favorite} alt="Favorite" width={15} height={15}/>
              </div> | 
              <div>Chicken Kofta</div>
            </div>

            <p className={styles["combo-note"]}>
              *Combo is served with fries and canned soft drink
            </p>
          </article>

          {/* Item 2 */}
          <article className={styles["info"]}>
            <div className={styles["info-heading"]}>
              <h3 className={styles["info-heading-label"]}>
                NK<sup>®</sup> Wrap
              </h3>
              <p className={styles["info-heading-label"]}>$11.99</p>
            </div>

            <p className={styles["combo-pill"]}>Combo $15.99</p>

            <p className={styles["info-heading-text"]}>
              Our Lavash naan, wrapped around bold kabob flavours and crisp
              toppings – tradition made handheld.
            </p>

            <p className={styles["choose-protein"]}>Choose your protein:</p>
            <ul className={styles["list"]}>
              <li>Shami Kabob</li>
              <li>
                Chicken Tandoori <Image src={Spicy} alt="Spicy" width={15} height={15}/>{" "}
                <Image src={Favorite} alt="Favorite" width={15} height={15} />
              </li>
              <li>
                Paneer Kabob <Image src={Vegetarian} alt="Vegetarian" width={15} height={15} />
              </li>
              <li>Classic Chicken</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
