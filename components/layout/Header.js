"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.scss";
import headerlogo from "../../public/images/headerlogo.png";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const headerLinks = [
    { href: "/menu", label: "MENU" },
    { href: "/catering-menu", label: "Catering" },
    { href: "/contact-us", label: "Contact us" },
    { href: "/our-locations", label: "Our locations" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles["header-section-container"]} ${
          scrolled ? styles["scrolled"] : ""
        }`}
      >
        <div className={styles["header-content"]}>
          <div className={styles["header-logo-div"]}>
            <div className={styles["header-logo-image"]}>
              <Image src={headerlogo} alt="img" />
            </div>
          </div>
          <div className={styles["header-nav-links"]}>
            {headerLinks.map((item) => (
              <Link href={item.href} key={item.label}>
                <h6>{item.label}</h6>
              </Link>
            ))}
          </div>
          <div className={styles["button-menu-icon"]}>
            <Link href={"https://nandk.order.online/en/business/naan-kabob-112323"}>
            <button >Order Now</button>
            </Link>
            <div
              className={styles["menu-icon"]}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                width="30"
                height="21"
                viewBox="0 0 30 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1.5H28.5M1.5 10.1667H28.5M1.5 18.8333H28.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && <HeaderMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
