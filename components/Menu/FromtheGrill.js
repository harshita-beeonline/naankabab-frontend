import Image from "next/image";
import styles from "../../styles/FromtheGrill.module.scss";
import FromtheGrillTwitter from "../../public/images/FromtheGrillTwitter.png";
import FromtheGrillDish from "../../public/images/FromtheGrillDish.png";
import Spicy from "../../public/images/Spicy.svg";
import Favorite from "../../public/images/Favorite.svg";

export default function FromTheGrill() {
  const grillItems = [
    {
      name: "Classic Chicken Breast",
      price: "$18.99",
      desc: "Tender marinated chicken breast grilled to perfection.",
    },
    {
      name: "Tandoori Chicken",
      price: "$18.99",
      desc: "A marinated mildly spiced boneless-skinless chicken breast skewer.",
      spicy: true,
      favorite: true,
    },
    {
      name: "Chicken Kofta",
      price: "$18.99",
      desc: "Two skewers of lean ground chicken breast, seasoned with herbs and spices.",
      spicy: true,
    },
    {
      name: "Beef Tikka Kabob",
      price: "$19.99",
      desc: "A tender skewer of marinated and seasoned AAA beef sirloin.",
    },
    {
      name: "Shami Kabob",
      price: "$18.99",
      desc: "Two skewers of seasoned ground beef.",
    },
    {
      name: "Paneer",
      price: "$17.99",
      desc: "A firm mild cheese marinated in a house seasoning blend, grilled and served with eggplant.",
    },
  ];

  const signatureItems = [
    {
      name: "NHK Grill",
      price: "$22.99",
      desc: "A mix of tandoori chicken, shami kabob and classic chicken.",
      spicy: true,
      favorite: true,
    },
    {
      name: "Waziri Classic",
      price: "$20.99",
      desc: "One classic chicken skewer and one shami kabob.",
    },
    {
      name: "Waziri Tandoori",
      price: "$20.99",
      desc: "One tandoori chicken skewer and one shami kabob.",
      spicy: true,
    },
    {
      name: "Sultani Kabob",
      price: "$21.99",
      desc: "One beef tikka skewer and one shami kabob.",
    },
    {
      name: "Chopan Kabob",
      price: "$21.99",
      desc: "Tender, marinated lamb chops, seasoned and perfectly grilled.",
    },
  ];

  const renderBadges = (item) => (
    <>
      {item.spicy && <Image src={Spicy} alt="Spicy" width={16} height={16} />}
      {item.favorite && (
        <Image src={Favorite} alt="Favorite" width={16} height={16} />
      )}
    </>
  );

  return (
    <div className={styles["fromthegrill-section"]}>
      <Image
        src={FromtheGrillTwitter}
        alt="FromtheGrillTwitter"
        className={styles["FromtheGrillTwitter-left"]}
        width={309}
        height={286}
      />

      <div className={styles["fromthegrill-content"]}>
        {/* Top Dish Image */}
        <div className={styles["fromthegrill-top-content"]}>
          <Image
            src={FromtheGrillDish}
            alt="FromtheGrillDish"
            width={1140}
            height={605}
          />
        </div>

        {/* Bottom Content */}
        <div className={styles["fromthegrill-bottom-content"]}>
          <div className={styles["fromthegrill-bottom-content-heading"]}>
            <h2>From the Grill</h2>
            <p>
              Kabobs marinated for 24 hours, then fire-grilled over charcoal for
              juicy, smoky flavour.
            </p>
          </div>

          <div className={styles["fromthegrill-bottom-content-data"]}>
            {/* LEFT */}
            <div className={styles["fromthegrill-bottom-content-left"]}>
              {grillItems.map((item, index) => (
                <div key={index} className={styles["fromthegrill-menu"]}>
                  <div
                    className={styles["fromthegrill-menu-heading-withprice"]}
                  >
                    <div className={styles["fromthegrill-menu-heading"]}>
                      <p className={styles["fromthegrill-menu-heading-text"]}>
                        {item.name}
                      </p>
                      {renderBadges(item)}
                    </div>
                    <p>{item.price}</p>
                  </div>
                  <p className={styles["p"]}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* VERTICAL LINE */}
            <div className={styles["divider"]}></div>

            {/* RIGHT */}
            <div className={styles["fromthegrill-bottom-content-right"]}>
              <p className={styles["signature-title"]}>Signature Grills</p>
              {signatureItems.map((item, index) => (
                <div key={index} className={styles["fromthegrill-menu"]}>
                  <div
                    className={styles["fromthegrill-menu-heading-withprice"]}
                  >
                    <div className={styles["fromthegrill-menu-heading"]}>
                      <p className={styles["fromthegrill-menu-heading-text"]}>
                        {item.name}
                      </p>
                      {renderBadges(item)}
                    </div>
                    <p>{item.price}</p>
                  </div>
                  <p className={styles["p"]}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        src={FromtheGrillTwitter}
        alt="FromtheGrillTwitter"
        className={styles["FromtheGrillTwitter-right"]}
        width={229}
        height={211}
      />
    </div>
  );
}
