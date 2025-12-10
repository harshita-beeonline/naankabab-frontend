import LeftContent from "@/components/IndividaulBlog/LeftContent";
import RightContent from "@/components/IndividaulBlog/RightContent";
import styles from "../../styles/IndividualBlog.module.scss";

export default function IndividualBlog() {
  return (
    <div className={styles["individual-blog-section"]}>
      <div className={styles["left-content"]}>
        <LeftContent />
      </div>
      <div className={styles["right-content"]}>
        <RightContent />
      </div>
    </div>
  );
}
