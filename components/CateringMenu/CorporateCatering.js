import React from "react";
import styles from "../../styles/CorporateCatering.module.scss";
import afghanbowl from "../../public/images/afghanbowl.png";
import Image from "next/image";
import cateringvector from '../../public/images/cateringvector.svg';

const CorporateCatering = () => {
  const cardData = [
    {
      title: "Why Offices Choose NK:",
      list: [
        "Fresh, Halal, and perfectly portioned",
        "On-time delivery, ready to serve",
        "Individually packed bowls or large sharing trays",
        "Ideal for recurring team lunches or special events",
      ],
    },
    {
      title: "Office Favourites:",
      list: [
        "Kabob Platters for 10 – Sharing Made Simple",
        "Personal Afghan Bowls – Crafted for Busy Days",
        "Wrap Trays with Fries – Crowd-Pleasers for All",
      ],
    },
  ];
  const bowlsData = [
    {
      title: "SPRING BOWL",
      description: "Served with mixed greens and your choice of protein",
      items: [
        { name: "TANDOORI", type: "nonveg" },
        { name: "CLASSIC CHICKEN", type: "nonveg" },
        { name: "SHAMI", type: "nonveg" },
        { name: "PANEER", type: "veg" },
      ],
    },
    {
      title: "POWER BOWL",
      description: "Served with Qabli rice and your choice of protein",
      items: [
        { name: "TANDOORI", type: "nonveg" },
        { name: "CLASSIC CHICKEN", type: "nonveg" },
        { name: "SHAMI", type: "nonveg" },
      ],
    },
  ];

  return (
    <>
      <div className={styles["background-image-left"]}>
        <div className={styles["left-side-vector-image"]}>
            <Image src={cateringvector} alt=""/>
        </div>
        <div className={styles["corporate-catering-section"]}>
          <div className={styles["text-divider"]}>
            <h2>Corporate Catering</h2>
            <div className={styles["divider"]}></div>
            <h6>Elevate Your Team Meals</h6>
          </div>
          <p>
            Make every meeting, lunch, or celebration effortless. Our catering
            is designed for busy teams that want real flavour without the
            hassle.
          </p>
          <div className={styles["all-corporate-cards"]}>
            {cardData.map((item, index) => (
              <div className={styles["corporate-card"]} key={index}>
                <h6>{item.title}</h6>
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles["afghan-image-section"]}>
          <div className={styles["afghan-bowl-image"]}>
            <Image src={afghanbowl} alt="img" />
          </div>
        </div>
      </div>

      
      <div className={styles["afghan-content-section"]}>
        <div className={styles["afghan-details"]}>
          <div className={styles["afghan-text-divider"]}>
            <h2>PERSONAL AFGHAN BOWL</h2>
            <div className={styles["divider"]}></div>
            <div className={styles["minimum-price"]}>
              <h6>*Price : $18 Per Bowl</h6>
              <h6>*Minimum 10 bowls per order</h6>
            </div>
          </div>
          <p>
            A base of fresh romaine lettuce and spring mix drizzled with our
            special dressing, topped with your choice of protein, avocado dip,
            yogurt chutney, pickled onion, spiced crispy chickpeas, Afghan
            salata, and crunchy baby cucumbers.
          </p>
          <div className={styles["bowls-section"]}>
            {bowlsData.map((bowl, index) => (
              <div className={styles["bowl-card"]} key={index}>
                <h4>{bowl.title}</h4>
                <p>{bowl.description}</p>
                {bowl.items.map((item, i) => (
                  <li key={i}>
                    {item.name}{" "}
                    {item.type === "veg" ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10C20 15.5278 15.5278 20 10 20C4.47222 20 0 15.5278 0 10C0 4.47222 4.47222 0 10 0C15.5278 0 20 4.47222 20 10Z"
                          fill="#29B474"
                        />
                        <path
                          d="M4.84722 12.5694H4.83333L3.01389 6.41667H3.875L4.40278 8.30556C4.66667 9.26389 4.90278 9.97222 5.11111 10.8472C5.59722 9.98611 6.04167 9.26389 6.61111 8.30556L7.75 6.41667H8.61111L4.84722 12.5694Z"
                          fill="white"
                        />
                        <path
                          d="M11.625 9.81945C11.625 10.1528 11.5278 10.4028 11.5139 10.5278H8.38889C8.29167 11.3611 8.75 11.875 9.63889 11.875C10.2083 11.875 10.8333 11.7083 11.2222 11.4861L11.1111 12.1944C10.75 12.375 10.1667 12.5556 9.48611 12.5556C8.30556 12.5556 7.58333 11.8056 7.58333 10.6944C7.58333 9.26389 8.72222 8.15278 10.0278 8.15278C11.1111 8.15278 11.6528 8.91667 11.6528 9.80556M9.90278 8.81945C9.18056 8.81945 8.65278 9.375 8.48611 9.98611H10.8472C10.9444 9.375 10.6528 8.81945 9.90278 8.81945Z"
                          fill="white"
                        />
                        <path
                          d="M12.4861 13.3194C12.8472 13.5694 13.3194 13.6944 13.9167 13.6944C14.75 13.6944 15.4167 13.25 15.5417 12.4306L15.5972 12.0972C15.625 11.875 15.6806 11.7361 15.6806 11.7361H15.6667C15.375 12.1667 14.75 12.5556 14.0694 12.5556C13.1111 12.5556 12.4444 11.8194 12.4444 10.7222C12.4444 9.23611 13.5278 8.15278 14.7778 8.15278C15.4583 8.15278 15.9861 8.56945 16.125 9H16.1389C16.1389 9 16.1389 8.875 16.1667 8.69445L16.25 8.26389H16.9722L16.3056 12.4583C16.0972 13.7917 15.0556 14.4028 13.8056 14.4028C13.1389 14.4028 12.6667 14.25 12.3611 14.0556L12.4722 13.3056L12.4861 13.3194ZM13.2083 10.6389C13.2083 11.375 13.625 11.8889 14.3056 11.8889C15.0139 11.8889 15.8889 11.3194 15.8889 10.0833C15.8889 9.23611 15.3472 8.83333 14.7778 8.83333C13.8889 8.83333 13.2083 9.625 13.2083 10.625"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10C20 15.5278 15.5278 20 10 20C4.47222 20 0 15.5278 0 10C0 4.47222 4.47222 0 10 0C15.5278 0 20 4.47222 20 10Z"
                          fill="#DE3926"
                        />
                        <path
                          d="M14.8472 6.875C14.8889 7.05556 14.9444 7.22222 14.9861 7.40278C15.2222 8.375 15.1806 9.33333 14.9028 10.2917C14.5 11.7222 13.6806 12.8611 12.5556 13.8056C11.75 14.4861 10.8472 15 9.875 15.4028C8.90278 15.7917 7.90278 16.0417 6.86111 16.0556C6.08333 16.0556 5.30556 15.9583 4.59722 15.625C4.27778 15.4722 3.98611 15.2778 3.76389 14.9861C3.48611 14.6111 3.51389 14.1667 3.86111 13.8472C4 13.7222 4.15278 13.5972 4.33333 13.5139C4.97222 13.2222 5.625 12.9583 6.26389 12.6667C6.77778 12.4306 7.26389 12.1528 7.70833 11.7778C8.18056 11.375 8.48611 10.8611 8.68056 10.2917C8.93056 9.56944 9.02778 8.81944 9.19444 8.08333C9.29167 7.63889 9.41667 7.19444 9.58333 6.76389C9.83333 6.09722 10.3333 5.63889 10.9583 5.31944C11.3889 5.09722 11.8333 4.97222 12.3194 4.95833C12.4028 4.95833 12.4444 4.93056 12.4583 4.84722C12.5556 4.40278 12.4861 3.98611 12.3611 3.55556C12.3194 3.40278 12.2639 3.26389 12.2083 3.11111C12.4583 3 12.6944 2.88889 12.9306 2.77778C12.9444 2.81944 12.9722 2.86111 12.9861 2.90278C12.9861 2.95833 13.0139 3 13.0278 3.05556C13.2639 3.70833 13.3889 4.38889 13.2222 5.08333C13.25 5.09722 13.2778 5.11111 13.3194 5.125C13.6528 5.26389 13.9444 5.47222 14.1806 5.76389C14.3194 5.93056 14.4444 6.09722 14.5694 6.27778C14.6667 6.48611 14.7778 6.70833 14.875 6.91667M10.1528 7.33333C10.0556 7.75 9.97222 8.13889 9.88889 8.52778C9.73611 9.30556 9.58333 10.0833 9.29167 10.8333C9.04167 11.4583 8.65278 12 8.13889 12.4167C7.44444 12.9861 6.625 13.3472 5.80556 13.7083C5.38889 13.8889 4.95833 14.0833 4.54167 14.2778C4.34722 14.375 4.33333 14.4722 4.51389 14.6111C4.68056 14.75 4.875 14.875 5.06944 14.9583C5.77778 15.2778 6.52778 15.3194 7.27778 15.2361C8.63889 15.0972 9.875 14.6111 11.0278 13.9028C11.8194 13.4167 12.5278 12.8194 13.1111 12.0833C13.8889 11.1111 14.375 10.0278 14.375 8.76389C14.375 8.43056 14.3194 8.09722 14.2917 7.75C13.75 7.98611 13.375 8.375 12.9722 8.75C12.7361 8.27778 12.5139 7.84722 12.1667 7.45833C11.6944 7.63889 11.3056 7.94444 10.9028 8.22222C10.7083 7.88889 10.5 7.58333 10.1806 7.31944M11.0833 7.13889C11.0833 7.13889 11.2083 7.06944 11.2778 7.02778C11.5972 6.83333 11.9306 6.68056 12.2917 6.61111C12.3472 6.61111 12.4306 6.625 12.4722 6.66667C12.5972 6.79167 12.7222 6.93056 12.8333 7.06945C12.9444 7.20833 13.0417 7.34722 13.1528 7.48611C13.4444 7.31944 13.7083 7.15278 14.0139 6.98611C13.9167 6.80556 13.8194 6.61111 13.7083 6.43056C13.375 5.94444 12.9028 5.69445 12.3056 5.70833C11.8056 5.72222 11.3611 5.91667 10.9583 6.20833C10.8056 6.31944 10.6667 6.45833 10.5278 6.58333C10.7222 6.77778 10.9028 6.94445 11.0833 7.125"
                          fill="white"
                        />
                      </svg>
                    )}
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateCatering;
