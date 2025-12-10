import styles from "../../styles/GetInTouch.module.scss";
import wp_icon from "../../public/images/wp-icon.svg";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className={styles["get-in-touch-section"]}>
      <div className={styles["get-in-touch-content"]}>
        <h2>Let’s Get in touch!</h2>
        <p>
          Please submit your inquiry in the form below and we’ll get in touch
          with you within the next 24-48 business hours!
        </p>

        <div className={styles["form-wrap"]}>
          <form>
            {/* Row 1 */}
            <div className={styles["row"]}>
              <div className={styles["field"]}>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="FIRST NAME *"
                  required
                />
              </div>
              <div className={styles["field"]}>
                <input
                  id="lastname"
                  name="lastName"
                  type="text"
                  placeholder="LAST NAME *"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles["row"]}>
              <div className={styles["field"]}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="EMAIL *"
                  required
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className={styles["row"]}>
              <div className={styles["field"]}>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="SUBJECT *"
                  required
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className={styles["row"]}>
              <div className={styles["field"]}>
                <input
                  id="message"
                  name="message"
                  placeholder="MESSAGE *"
                  required
                />
              </div>
            </div>

            <div className={styles["actions"]}>
              <button className={styles["btn-submit"]} type="submit">
                submit
              </button>
              <span className={styles["or"]}>or</span>
              <button className={styles["btn-whatsapp"]}>
                <Image src={wp_icon} alt="wp-icon" width={21} height={21} />{" "}
                <p>Connect via WhatsApp</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
