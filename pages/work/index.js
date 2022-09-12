import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WorkItem from '../components/WorkItem/WorkItem';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import styles from './Work.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Work({ red }) {
  const ui = [
    {
      title: 'Sound Wave',
      img: 'sound.png',
      url: 'https://www.figma.com/file/EL0zLCb5z0kafGva7JAmfj/Sound-Wave?node-id=0%3A1',
    },
    {
      title: 'Splash',
      img: 'splash.png',
      url: 'https://www.figma.com/file/JusHUdz3gRyAbnkAVD3Jq7/Splash?node-id=0%3A1',
    },
    {
      title: 'Superfast Tours',
      img: 'superfast.png',
      url: 'https://www.figma.com/file/x5bO6wpRKFPn3EihlEl0JA/Superfast-Tours?node-id=0%3A1',
    },
    {
      title: 'Dog Groom',
      img: 'doggroom.png',
      url: 'https://www.figma.com/file/8C6P9Kj1FUhwwfa3Gm29g6/Dog-Groom?node-id=0%3A1',
    },
    {
      title: 'Coffee Time',
      img: 'coffee-time.png',
      url: 'https://www.figma.com/file/KOhKGj5xYE2lhypnyysXqK/Coffee-Shop?node-id=0%3A1',
    },
    {
      title: 'Blossom',
      img: 'blossom.png',
      url: 'https://www.figma.com/file/QUKK3U40OIDbYsZS9h1jET/Blossoms?node-id=0%3A1',
    },
    {
      title: 'Grid Agency',
      img: 'grid.png',
      url: 'https://www.figma.com/file/vHI6jmLWVZIhmtBXSufs8g/Grid-Agency?node-id=0%3A1',
    },
    {
      title: 'Blaze Burgers',
      img: 'blaze-burgers.png',
      url: 'https://www.figma.com/file/fag55qbZwUDX5HtYxOFJis/Burger?node-id=0%3A1',
    },
  ];

  const apps = [
    {
      title: 'Clock',
      img: 'clock.png',
      url: 'https://www.figma.com/file/HPRasUkcu2bSMBLehOQN4U/Clock?node-id=0%3A1',
    },
    {
      title: 'Weather App',
      img: 'weather.png',
      url: 'https://www.figma.com/file/kRZABiQxQELoJdeLo9KpFc/Weather-app?node-id=0%3A1',
    },
  ];

  const illustrations = [
    {
      img: 'forest-lake.jpg',
      title: 'Forest Lake',
    },
    {
      img: 'forest.jpg',
      title: 'Forest',
    },
    {
      img: 'apocalypse.jpg',
      title: 'Apocalypse',
    },
    {
      img: 'halloween.jpg',
      title: 'Halloween',
    },
  ];

  return (
    <>
      <Header />
      <div className={`${styles.work} ${red ? 'red' : 'blue'}`}>
        <div className='container'>
          <h2 className='large-title'>UI Design</h2>
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

          <h2 className='large-title'>Apps</h2>
          {apps?.map(({ title, img, url }, index) => (
            <WorkItem title={title} img={img} url={url} key={`apps-${index}`} />
          ))}
          <h2 className='large-title'>Illustrations</h2>
          <div className={styles.illustrationsWrapper}>
            {illustrations?.map(({ title, img }, index) => (
              <img
                src={`/images/work/${img}`}
                alt={title}
                key={`logo-${index}`}
              />
            ))}
          </div>
          <div
            className={styles.illustrationsCta}
            style={{ textAlign: 'center' }}
          >
            <Link href='https://www.shutterstock.com/g/Thanassis' passHref>
              <a className={'main-cta-white'} target='_blank'>
                More on Shutterstock
              </a>
            </Link>
          </div>
        </div>
        <Footer red={red} />
      </div>
    </>
  );
}
