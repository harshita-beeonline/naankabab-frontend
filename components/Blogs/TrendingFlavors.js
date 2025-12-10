import Image from "next/image";
import styles from "../../styles/TrendingFlavors.module.scss";
import tredingfalvour1 from "../../public/images/tredingfalvour1.png";
import tredingfalvour2 from "../../public/images/tredingfalvour2.png";
import tredingfalvour3 from "../../public/images/tredingfalvour3.png";
import tredingfalvour4 from "../../public/images/tredingfalvour4.png";

export default function TrendingFlavors() {
  const trendingData = [
    {
      image: tredingfalvour1,
      title: "Autumn Comforts: Mediterranean Dishes to Warm Your Table",
      desc: "Explore how seasonal ingredients like pumpkin, figs, and rosemary bring cozy Mediterranean comfort to your fall menu.",
    },
    {
      image: tredingfalvour2,
      title: "The Rise of Middle Eastern Street Food: From Shawarma to Falafel",
      desc: "Discover why authentic, handheld Middle Eastern bites are taking over food festivals and urban menus worldwide.",
    },
    {
      image: tredingfalvour3,
      title: "Spice Revival: How Global Kitchens Are Rediscovering Bold Flavors",
      desc: "From Afghan kabobs to North African tagines, bold spice blends are making a comeback in modern kitchens.",
    },
    {
      image: tredingfalvour4,
      title: "The Rise of Middle Eastern Street Food: From Shawarma to Falafel",
      desc: "Discover why authentic, handheld Middle Eastern bites are taking over food festivals and urban menus worldwide.",
    },
  ];

  const categories = [
    "Afghan Cuisine",
    "Afghan feast",
    "Afghan Restaurant",
    "Catering Services",
    "Halal food",
    "Mediterranean Cuisine",
    "Mediterranean Food",
    "Naan Kabob",
    "Naan Kabob Dining",
    "Naan Kabob Mississauga",
    "Naan Kabob Scarborough",
    "Naan Kabob Toronto",
    "Naan Kabob Woodbridge",
    "Uncategorized",
  ];

  return (
    <section className={styles["TrendingFlavors-section"]}>
      <div className={styles["TrendingFlavors-container"]}>
        <div className={styles["TrendingFlavors-left"]}>
          <h2>Trending Flavors</h2>
          <div className={styles["TrendingFlavors-list"]}>
            {trendingData.map((item, index) => (
              <div key={index} className={styles["TrendingFlavors-card"]}>
                <div className={styles["TrendingFlavors-card-image"]}>
                  <Image src={item.image} alt={item.title} width={230} height={160} />
                </div>
                <div className={styles["TrendingFlavors-card-content"]}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["TrendingFlavors-right"]}>
          <h2>Categories</h2>
          <ul className={styles["TrendingFlavors-categories"]}>
            {categories.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
