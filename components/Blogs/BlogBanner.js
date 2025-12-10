import styles from "../../styles/BlogBanner.module.scss";

export default function BlogBanner() {
  return (
    <div className={styles["blogbanner-section"]}>
      <div className={styles["blogbanner-content"]}>
        <h2>Explore Naan Kabob:</h2>
        <h2>Authentic Afghan Cuisine</h2>
        <h2>& Catering Services</h2>
      </div>
    </div>
  );
}
