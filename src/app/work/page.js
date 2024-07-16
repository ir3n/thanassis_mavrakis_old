"use client";

import { useContext } from "react";
import { ColorContext } from "@/providers/color-provider";
import Image from "next/image";
import WorkItem from "@/components/WorkItem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "./Work.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Work() {
  const { red } = useContext(ColorContext);

  const ui = [
    {
      title: "Sound Wave",
      img: "sound.png",
      url: "https://www.figma.com/proto/EL0zLCb5z0kafGva7JAmfj/Sound-Wave?page-id=525%3A628&node-id=525%3A1446&viewport=896%2C634%2C0.06&scaling=min-zoom",
    },
    {
      title: "The Elf House",
      img: "elf-house.png",
      url: "https://www.figma.com/proto/EzUsOVBz42VDZS5vytD58g/The-elf-house?page-id=105%3A515&node-id=105%3A516&viewport=978%2C1127%2C0.26&scaling=min-zoom&starting-point-node-id=105%3A516&show-proto-sidebar=1",
    },
    {
      title: "Blossoms",
      img: "blossom.png",
      url: "https://www.figma.com/proto/QUKK3U40OIDbYsZS9h1jET/Blossoms?page-id=507%3A490&node-id=507%3A592&viewport=999%2C442%2C0.05&scaling=min-zoom",
    },
    {
      title: "Dog Groom",
      img: "doggroom.png",
      url: "https://www.figma.com/proto/8C6P9Kj1FUhwwfa3Gm29g6/Dog-Groom?page-id=328%3A224&node-id=328%3A225&viewport=976%2C349%2C0.11&scaling=min-zoom",
    },
    {
      title: "Blaze Burgers",
      img: "blaze-burgers.png",
      url: "https://www.figma.com/proto/fag55qbZwUDX5HtYxOFJis/Burger?page-id=0%3A1&node-id=41%3A2&viewport=-516%2C764%2C0.12&scaling=min-zoom",
    },
    {
      title: "Splash",
      img: "splash.png",
      url: "https://www.figma.com/proto/JusHUdz3gRyAbnkAVD3Jq7/Splash?page-id=804%3A579&node-id=804%3A580&viewport=661%2C420%2C0.06&scaling=min-zoom",
    },
    {
      title: "Grid Agency",
      img: "grid.png",
      url: "https://www.figma.com/proto/vHI6jmLWVZIhmtBXSufs8g/Grid-Agency?page-id=290%3A80&node-id=290%3A81&viewport=709%2C384%2C0.13&scaling=min-zoom",
    },
    {
      title: "Coffee Time",
      img: "coffee-time.png",
      url: "https://www.figma.com/proto/KOhKGj5xYE2lhypnyysXqK/Coffee-Shop?page-id=547%3A1837&node-id=547%3A1838&viewport=524%2C401%2C0.16&scaling=min-zoom",
    },
    {
      title: "Superfast Tours",
      img: "superfast.png",
      url: "https://www.figma.com/proto/x5bO6wpRKFPn3EihlEl0JA/Superfast-Tours?page-id=705%3A1098&node-id=705%3A1507&viewport=1078%2C368%2C0.07&scaling=min-zoom",
    },
  ];

  const apps = [
    {
      title: "Clock",
      img: "clock.png",
      url: "https://www.figma.com/proto/HPRasUkcu2bSMBLehOQN4U/Clock?page-id=516%3A119&node-id=516%3A156&viewport=899%2C525%2C0.34&scaling=scale-down",
    },
    {
      title: "Weather App",
      img: "weather.png",
      url: "https://www.figma.com/proto/kRZABiQxQELoJdeLo9KpFc/Weather-app?page-id=411%3A49&node-id=411%3A1433&viewport=948%2C801%2C0.28&scaling=scale-down",
    },
  ];

  const illustrations = [
    {
      img: "forest-lake.jpg",
      title: "Forest Lake",
    },
    {
      img: "forest.jpg",
      title: "Forest",
    },
    {
      img: "apocalypse.jpg",
      title: "Apocalypse",
    },
    {
      img: "halloween.jpg",
      title: "Halloween",
    },
  ];

  return (
    <>
      <div className={`${styles.work} ${red ? "red" : "blue"}`}>
        <Header />
        <div className="container">
          <h2 className="large-title">UI Design</h2>
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            navigation
            speed={1500}
            loop={true}
            autoplay={true}
          >
            {ui?.map(({ title, img, url }, index) => (
              <SwiperSlide key={`ui-${index}`}>
                <WorkItem title={title} img={img} url={url} />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="large-title">Apps</h2>
          {apps?.map(({ title, img, url }, index) => (
            <WorkItem title={title} img={img} url={url} key={`apps-${index}`} />
          ))}
          <h2 className="large-title">Illustrations</h2>
          <div className={styles.illustrationsWrapper}>
            {illustrations?.map(({ title, img }, index) => (
              <Image
                key={`illustration-${index}`}
                src={`/images/work/${img}`}
                width={590}
                height={330}
                alt={title}
                style={{ height: "auto" }}
              />
            ))}
          </div>
          <div
            className={styles.illustrationsCta}
            style={{ textAlign: "center" }}
          >
            <a
              href="https://www.shutterstock.com/g/George+Griever?rid=432729803"
              className={"main-cta-white"}
              target="_blank"
            >
              More on Shutterstock
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
