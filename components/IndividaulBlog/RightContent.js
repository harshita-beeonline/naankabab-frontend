import styles from "../../styles/RightContent.module.scss";
import Image from "next/image";
import blogrecentpost1 from "../../public/images/blog-recent-post1.png";
import blogrecentpost2 from "../../public/images/blog-recent-post2.png";

export default function RightContent() {
  return (
    <div className={styles["rightcontent-section"]}>
      {/* ---------- Recent Posts ---------- */}
      <div className={styles["recent-post-section"]}>
        <h3>Recent Post</h3>

        <div className={styles["recent-post-card"]}>
          <div className={styles["recent-post-image"]}>
            <Image
              src={blogrecentpost1}
              alt="Autumn Comforts"
              width={360}
              height={180}
            />
          </div>
          <div className={styles["recent-post-info"]}>
            <h4>Autumn Comforts: Mediterranean Dishes to Warm Your Table</h4>
            <p>
              Explore how seasonal ingredients like pumpkin, figs, and rosemary
              bring cozy Mediterranean comfort to your fall meals.
            </p>
            <button>Read More</button>
          </div>
        </div>

        <div className={styles["recent-post-card"]}>
          <div className={styles["recent-post-image"]}>
            <Image
              src={blogrecentpost2}
              alt="Middle Eastern Street Food"
              width={360}
              height={180}
            />
          </div>
          <div className={styles["recent-post-info"]}>
            <h4>
              The Rise of Middle Eastern Street Food: From Shawarma to Falafel
            </h4>
            <p>
              From Afghan kabobs to North African tagines, bold spices blend
              across regions making a comeback in modern kitchens.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>

      {/* ---------- Categories ---------- */}
      <div className={styles["categories-section"]}>
        <h3>Categories</h3>
        <ul>
          <li>Afghan Cuisine</li>
          <li>Afghan Feast</li>
          <li>Afghan Restaurant</li>
          <li>Catering Services</li>
          <li>Halal Food</li>
          <li>Mediterranean Cuisine</li>
          <li>Mediterranean Food</li>
          <li>Naan Kabob</li>
          <li>Naan Kabob Dining</li>
          <li>Naan Kabob Mississauga</li>
          <li>Naan Kabob Scarborough</li>
          <li>Naan Kabob Toronto</li>
          <li>Naan Kabob Woodbridge</li>
          <li>Uncategorized</li>
        </ul>
      </div>
    </div>
  );
}
