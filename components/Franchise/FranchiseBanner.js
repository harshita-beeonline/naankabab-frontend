import React from "react";
import styles from "../../styles/FranchiseBanner.module.scss";
import franchisecard1 from "../../public/images/franchisecard1.jpg";
import franchisecard2 from "../../public/images/franchisecard2.jpg";
import franchisecard3 from "../../public/images/franchisecard3.jpg";
import Link from "next/link";

const FranchiseBanner = () => {
  const franchiseCardData = [
    {
      image: franchisecard1,
      title: <>Grow With Us</>,
      details:
        "Join a trusted Canadian brand bringing Afghan flavor to communities everywhere.",
    },
    {
      image: franchisecard2,
      title: (
        <>
          Built for
          <br />
          Partnership
        </>
      ),
      details:
        "We provide the training, marketing, and ongoing support you need to succeed.",
    },
    {
      image: franchisecard3,
      title: (
        <>
          Start Your
          <br />
          Journey
        </>
      ),
      details:
        "Learn about our investment options and apply to become a Naan Kabob partner today.",
    },
  ];
  return (
    <>
      <div className={styles["franchise-banner-section"]}>
        <div className={styles["franchise-banner-content"]}>
          <h2>JOIN A BRAND CRAFTED FOR GROWTH</h2>
          <p>
            From humble beginnings to one of Canada’s most beloved Afghan
            restaurant brands, Naan Kabob has redefined what fast-premium dining
            can be.
          </p>
          <p>
            Rooted in authentic flavors, heartfelt hospitality, and consistent
            excellence, our story is built on people who care - from our chefs
            and managers to every guest who walks through our doors.
          </p>
        </div>
      </div>
      <div className={styles["franchise-cards-section"]}>
        <div className={styles["franchise-all-cards-container"]}>
          {franchiseCardData.map((item, index) => (
            <Link href={"#"} key={index}>
              <div
                className={styles["franchise-card"]}
                style={{
                  backgroundImage: `url(${item.image.src})`,
                }}
              >
                <h2>{item.title}</h2>
                <p>{item.details}</p>
                <button>Explore</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FranchiseBanner;
