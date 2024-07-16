"use client";

import Header from "@/components/Header";
import HalfImageHalfText from "@/components/HalfImageHalfText";
import TitleImagesCta from "@/components/TitleImagesCta";
import { useRef, useContext } from "react";
import { ColorContext } from "@/providers/color-provider";
import Footer from "@/components/Footer";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const { red } = useContext(ColorContext);
  const scrollRef = useRef(null);

  const executeScroll = () => scrollRef.current.scrollIntoView();

  const imagesDark = [
    "/images/hero/hero-dark-layer1.svg",
    "/images/hero/hero-dark-layer2.svg",
    "/images/hero/hero-dark-layer3.svg",
    "/images/hero/hero-dark-layer4.svg",
    "/images/hero/hero-dark-layer5.svg",
    "/images/hero/hero-dark-layer6.svg",
    "/images/hero/hero-dark-layer7.svg",
    "/images/hero/hero-dark-layer8.svg",
  ];
  const imagesRed = [
    "/images/hero/hero-red-layer1.svg",
    "/images/hero/hero-red-layer2.svg",
    "/images/hero/hero-red-layer3.svg",
    "/images/hero/hero-red-layer4.svg",
    "/images/hero/hero-red-layer5.svg",
    "/images/hero/hero-red-layer6.svg",
    "/images/hero/hero-red-layer7.svg",
    "/images/hero/hero-red-layer8.svg",
  ];

  const about = [
    {
      text: "My name is Thanassis Mavrakis, a self taught UI designer based in Athens, Greece. I began my journey in design in early 2022 and from the first moment I knew this was what I wanted to do.",
      img: "about-1-blue.gif",
      imgRed: "about-1-red.gif",
      reverse: false,
    },
    {
      text: "I am also a self taught guitarist and music composer. In my free time I enjoy the company of a good book and going out for walks with my dog.",
      img: "about-2-blue.gif",
      imgRed: "about-2-red.gif",
      reverse: true,
    },
  ];

  return (
    <>
      <main>
        <div className={styles.parallax} id="parallax-banner">
          <div ref={scrollRef}>
            <Header />
          </div>
          {imagesDark?.map((image, i) => {
            const x = (imagesDark.length - i) / 2;

            return (
              <div
                className={`${styles.parallax__layer} parallax__layer__${i}`}
                key={`parallax-blue-${i}`}
                style={{
                  transform: `translateZ(${-100 * x}px) scale(${x + 1})`,
                  opacity: red ? "0" : "1",
                }}
              >
                <img src={image} alt="Thanassis Mavrakis" />
              </div>
            );
          })}
          {imagesRed?.map((image, i) => {
            const x = (imagesRed.length - i) / 2;

            return (
              <div
                className={`${styles.parallax__layer} parallax__layer__${i}`}
                key={`parallax-red-${i}`}
                style={{
                  transform: `translateZ(${-100 * x}px) scale(${x + 1})`,
                  opacity: red ? "1" : "0",
                }}
              >
                <img src={image} alt="Thanassis Mavrakis" />
              </div>
            );
          })}
          <div className={styles.parallax__info} id="parallax-info">
            <h2 className={styles.parallax__info__title}>
              Hello, I am Thanassis
            </h2>
            <h4 className={styles.parallax__info__sub}>UI/UX designer</h4>
          </div>
          <div className={styles.parallax__cover}>
            <div className={styles.about}>
              <div className={styles.about__container}>
                <h2 className="title">About me</h2>

                {about?.map((item, i) => {
                  return (
                    <HalfImageHalfText
                      red={red}
                      img={`/images/about/${item.img}`}
                      imgRed={`/images/about/${item.imgRed}`}
                      text={item.text}
                      reverse={item.reverse}
                      key={`halfItem-${i}`}
                    />
                  );
                })}

                <hr
                  style={{
                    backgroundColor: red ? "#a51003" : "#005cad",
                  }}
                />
              </div>
            </div>
            <TitleImagesCta red={red} />
            <Footer
              red={red}
              executeScroll={executeScroll}
              scrollRef={scrollRef}
            />
          </div>
        </div>
      </main>
    </>
  );
}
