import Link from "next/link";
import styles from "../../styles/ShareExperience.module.scss";
import email_icon from "../../public/images/email-icon.svg";
import linkedin from "../../public/images/linkedin.svg";
import facebook from "../../public/images/facebook.svg";
import instagram from "../../public/images/instagram.svg";
import tiktok from "../../public/images/tiktok.svg";
import yt from "../../public/images/yt.svg";
import Image from "next/image";

export default function ShareExperience() {
  return (
    <div className={styles["ShareExperience-section"]}>
      <div className={styles["ShareExperience-section-content"]}>
        <div className={styles["ShareExperience-heading"]}>
          <h2>Share Your Experience</h2>
          <h5>Loved your visit?</h5>
          <p>
            We’d love to hear what made it special - our team members love being
            recognized for their great work.
          </p>
          <h5>Something we can improve?</h5>
          <p>
            Tell us what happened so we can make it right. We take every
            suggestion seriously and respond where follow-up is needed.
          </p>
        </div>

        <div className={styles["ShareExperience-cards"]}>
          <div className={styles["cards"]}>
            <div className={styles["card"]}>
              <h2>General Inquiries</h2>
              <p>
                For questions about our menu, service, or upcoming locations:
              </p>
              <div className={styles["link"]}>
                <div>
                  <Image src={email_icon} alt="email_icon" />
                </div>
                <Link href={""}>info@naankabob.ca</Link>
              </div>
              <button>General inquiries</button>
            </div>

            <div className={styles["card"]}>
              <h2>Head Office</h2>
              <p>Naan Kabob Corporate Office Toronto, Ontario, Canada</p>
              <div className={styles["link"]}>
                <div>
                  <Image src={email_icon} alt="email_icon" />
                </div>
                <Link href={""}>info@naankabob.ca</Link>
              </div>
              <button>Head office</button>
            </div>

            <div className={styles["card"]}>
              <h2>Catering Orders</h2>
              <p>
                Bring the warmth of Afghan hospitality to your next gathering or
                office event. Our catering team will help you plan the perfect
                spread for any size or occasion.
              </p>
              <div className={styles["link"]}>
                <div>
                  <Image src={email_icon} alt="email_icon" />
                </div>
                <Link href={""}>catering@naankabob.ca</Link>
              </div>
              <button>Catering page</button>
            </div>

            <div className={styles["card"]}>
              <h2>Media & Partnerships</h2>
              <p>
                Bring the warmth of Afghan hospitality to your next gathering or
                office event. Our catering team will help you plan the perfect
                spread for any size or occasion.
              </p>
              <div className={styles["link"]}>
                <div>
                  <Image src={email_icon} alt="email_icon" />
                </div>
                <Link href={""}>marketing@naankabob.ca</Link>
              </div>
              <button>media & partnetships page</button>
            </div>

            <div className={styles["card"]}>
              <h2>Franchising</h2>
              <p>
                Interested in owning your own Naan Kabob? We’re expanding across
                Canada and internationally. Learn more at our 
              </p>
              <button>Franchising page</button>
              <div>
                <p>or email us directly at:</p>
                <div className={styles["link"]}>
                  <div>
                    <Image src={email_icon} alt="email_icon" />
                  </div>
                  <Link href={""}>franchise@naankabob.ca</Link>
                </div>
              </div>
            </div>

            <div className={styles["card"]}>
              <h2>Feedback</h2>
              <p>
                Your experience helps us grow. Share your comments or
                suggestions through our
              </p>
              <button>Feedback form</button>
              <div>
                <p>or email us directly at:</p>
                <div className={styles["link"]}>
                  <div>
                    <Image src={email_icon} alt="email_icon" />
                  </div>
                  <Link href={""}>feedback@naankabob.ca</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["card-last"]}>
            <h2>Stay Connected</h2>
            <p>
              Follow us on social media to see what’s new, find promotions, and
              celebrate our journey together:
            </p>
            <div className={styles["icons"]}>
              <Link href={""}>
                <Image src={linkedin} alt="" />
              </Link>
              <Link href={""}>
                <Image src={facebook} alt="" />
              </Link>
              <Link href={""}>
                <Image src={instagram} alt="" />
              </Link>
              <Link href={""}>
                <Image src={tiktok} alt="" />
              </Link>
              <Link href={""}>
                <Image src={yt} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
