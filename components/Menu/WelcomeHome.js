import styles from "../../styles/WelcomeHome.module.scss";
import MenuCards from "./MenuCards";

export default function WelcomeHome() {
  return (
    <div className={styles["welcome-home-section"]}>
      <div className={styles["welcome-home-content"]}>
        <h2>You are seen. You are family.</h2>
        <p>
          This table is your place of comfort, and this meal is our way of
          saying:
        </p>
        <p>Welcome home.</p>
        <MenuCards/>
      </div>
    </div>
  );
}
