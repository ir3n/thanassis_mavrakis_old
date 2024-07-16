"use client";

import { useContext } from "react";
import { ColorContext } from "@/providers/color-provider";
import Image from "next/image";
import styles from "./Footer.module.scss";

const socialLinks = [
  {
    name: "Instagram",
    icon: "instagram.svg",
    link: "https://www.instagram.com/thanassis.mavrakis/",
  },
  {
    name: "Linkedin",
    icon: "linkedin.svg",
    link: "https://www.linkedin.com/in/thanassis-mavrakis-231b3a244",
  },
  {
    name: "Email",
    icon: "email.svg",
    link: "mailto:thanassis.mavrakis@gmail.com",
  },
  {
    name: "Shutterstock",
    icon: "shutterstock.svg",
    link: "https://www.shutterstock.com/g/George+Griever?rid=432729803",
  },
];

const Footer = ({ executeScroll, scrollRef }) => {
  const { red } = useContext(ColorContext);

  return (
    <footer
      className={styles.footer}
      style={{
        backgroundColor: red ? "#5F0200" : "#000930",
      }}
    >
      <Image
        className={styles.footer__bg}
        src="/images/footer/footer-blue.svg"
        width={2538}
        height={900}
        alt="Let's create together"
        style={{
          opacity: red ? "0" : "1",
        }}
      />
      <div className="absolute">
        <Image
          className={styles.footer__bg}
          src="/images/footer/footer-red.svg"
          width={2538}
          height={900}
          alt="Let's create together"
          style={{
            opacity: red ? "1" : "0",
          }}
        />
      </div>

      <div className={styles.footer__info}>
        <h2 className="title" style={{ textAlign: "center", color: "#FFFFFF" }}>
          Let's create together
        </h2>
        <div className={styles.social}>
          {socialLinks?.map((item, i) => (
            <div
              key={`footer-social-${item.name}`}
              className={styles.social__icon}
            >
              <a href={item.link} target="_blank">
                {item.name}
                <Image
                  src={`/images/footer/${item.icon}`}
                  width={55}
                  height={55}
                  alt={item.name}
                />
              </a>
            </div>
          ))}
        </div>

        <div className={styles.copyright}>
          {`© ${new Date().getFullYear()} All rights reserved.`}
          <br />{" "}
          {`Designed by Thanassis
          Mavrakis. Coded by Irene Borada.`}
        </div>
      </div>
      <button
        className={styles.scroll}
        onClick={() => {
          scrollRef
            ? executeScroll()
            : window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Image
          src="/images/footer/top-arrow.svg"
          width={6}
          height={72}
          alt="Scroll to top"
        />
      </button>
    </footer>
  );
};

export default Footer;
