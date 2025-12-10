import styles from "../../styles/ContactBanner.module.scss";

export default function ContactBanner() {
  return (
    <div className={styles["contact-banner-section"]}>
      <div className={styles["contact-banner-content"]}>
        <h2>
          WE'D LOVE TO
          <br />
          HERE FROM YOU
        </h2>

        <p>
          At Naan Kabob, every connection matters. Whether you’re reaching out
          with a question, feedback, catering inquiry, or franchise opportunity
          - we’re here to listen and help.
          <br />
          <br />
          Our team reads every message carefully because we believe hospitality
          doesn’t end at our doors - it extends to every conversation we have.
        </p>
      </div>
    </div>
  );
}
