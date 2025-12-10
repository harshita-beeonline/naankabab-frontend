import React from "react";
import styles from "../../styles/HeaderMenu.module.scss";
import Link from "next/link";

const defaultLinks = [
  { link: "/", name: "Home" },
  { link: "/menu", name: "Our menu" },
  { link: "/catering-menu", name: "Catering" },
  { link: "/our-locations", name: "Our Locations" },
  { link: "/our-story", name: "OUR STORY" },
  { link: "/careers", name: "Careers" },
  { link: "/franchise", name: "Franchising" },
  { link: "/contact-us", name: "Contact Us" },
];

const HeaderMenu = ({ onClose }) => {
  const handleLinkClick = () => {
    if (onClose) onClose(); // close the menu when any link is clicked
  };
  const linkData = defaultLinks;
  return (
    <div className={styles["sidebar-menu-content"]}>
      <div className={styles["close-button-div"]}>
        <button className={styles["close-btn"]} onClick={onClose}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7081 19.2931C20.801 19.386 20.8747 19.4963 20.9249 19.6177C20.9752 19.7391 21.0011 19.8692 21.0011 20.0006C21.0011 20.132 20.9752 20.2621 20.9249 20.3835C20.8747 20.5048 20.801 20.6151 20.7081 20.7081C20.6151 20.801 20.5048 20.8747 20.3835 20.9249C20.2621 20.9752 20.132 21.0011 20.0006 21.0011C19.8692 21.0011 19.7391 20.9752 19.6177 20.9249C19.4963 20.8747 19.386 20.801 19.2931 20.7081L11.0006 12.4143L2.70806 20.7081C2.52042 20.8957 2.26592 21.0011 2.00056 21.0011C1.73519 21.0011 1.4807 20.8957 1.29306 20.7081C1.10542 20.5204 1 20.2659 1 20.0006C1 19.7352 1.10542 19.4807 1.29306 19.2931L9.58681 11.0006L1.29306 2.70806C1.10542 2.52042 1 2.26592 1 2.00056C1 1.73519 1.10542 1.4807 1.29306 1.29306C1.4807 1.10542 1.73519 1 2.00056 1C2.26592 1 2.52042 1.10542 2.70806 1.29306L11.0006 9.58681L19.2931 1.29306C19.4807 1.10542 19.7352 1 20.0006 1C20.2659 1 20.5204 1.10542 20.7081 1.29306C20.8957 1.4807 21.0011 1.73519 21.0011 2.00056C21.0011 2.26592 20.8957 2.52042 20.7081 2.70806L12.4143 11.0006L20.7081 19.2931Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div className={styles["menu-content"]}>
        {linkData.map((item, index) => (
          <Link href={item.link} onClick={handleLinkClick} key={index}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderMenu;
