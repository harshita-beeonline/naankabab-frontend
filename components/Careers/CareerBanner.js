import React from "react";
import styles from "../../styles/CareerBanner.module.scss";
import careercard1 from "../../public/images/careercard1.jpg";
import careercard2 from "../../public/images/careercard2.jpg";
import careercard3 from "../../public/images/careercard3.jpg";
import Link from "next/link";

const CareerBanner = () => {
  const careerCardData = [
    {
      image: careercard1,
      title: (
        <>
          GROW AND
          <br />
          EVOLVE
        </>
      ),
      details:
        "Our people are the secret ingredient behind every meal. At Naan Kabob, you don’t just work – you belong.",
    },
    {
      image: careercard2,
      title: (
        <>
          JOIN OUR
          <br />
          FAMILY
        </>
      ),
      details:
        "We offer training, leadership opportunities, and a culture built on respect and teamwork.",
    },
    {
      image: careercard3,
      title: (
        <>
          FIND YOUR
          <br />
          ROLE
        </>
      ),
      details:
        "Discover current openings and start a career crafted with purpose.",
    },
  ];

  return (
    <>
      <div className={styles["career-banner-section"]}>
        <div className={styles["career-banner-content"]}>
          <h2>
            GROW WITH US.
            <br />
            BELONG WITH US.
          </h2>

          <p>
            At Naan Kabob, we believe our people are the true recipe for
            success. From the first smile at the counter to the final sprinkle
            of seasoning on a kabob, everything we do begins with care.
          </p>
        </div>
      </div>
      <div className={styles["career-cards-section"]}>
        <div className={styles["career-all-cards-container"]}>
          {careerCardData.map((item, index) => (
            <Link href={"#"} key={index}>
              <div
                className={styles["career-card"]}
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

export default CareerBanner;
