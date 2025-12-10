"use client";
import styles from "../../styles/ContactLastSection.module.scss";
import Image from "next/image";
import img from "../../public/images/contactbannerlast.png";

export default function ContactLastSection() {
  return (
    <div className={styles["contact-last-section"]}>
      <div className={styles["contact-last-banner"]}>
        <div className={styles["contact-last-content"]}>
          <p>Because at Naan Kabob,</p>
          <h2>
            EVERY MESSAGE, <br />
            EVERY GUEST, AND <br />
            EVERY STORY MATTERS
          </h2>
          <p>It’s how we continue to grow, together.</p>
        </div>
      </div>
    </div>
  );
}
