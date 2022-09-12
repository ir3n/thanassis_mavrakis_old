import Head from 'next/head';

import Header from './components/Header/Header';
import HalfImageHalfText from './components/HalfImageHalfText/HalfImageHalfText';
import TitleImagesCta from './components/TitleImagesCta/TitleImagesCta';
import Footer from './components/Footer/Footer';
import { useRef } from 'react';

import styles from '../styles/Home.module.scss';

import imgDark1 from '../public/images/hero/hero-dark-layer1.svg';
import imgDark2 from '../public/images/hero/hero-dark-layer2.svg';
import imgDark3 from '../public/images/hero/hero-dark-layer3.svg';
import imgDark4 from '../public/images/hero/hero-dark-layer4.svg';
import imgDark5 from '../public/images/hero/hero-dark-layer5.svg';
import imgDark6 from '../public/images/hero/hero-dark-layer6.svg';
import imgDark7 from '../public/images/hero/hero-dark-layer7.svg';
import imgDark8 from '../public/images/hero/hero-dark-layer8.svg';

import imgRed1 from '../public/images/hero/hero-red-layer1.svg';
import imgRed2 from '../public/images/hero/hero-red-layer2.svg';
import imgRed3 from '../public/images/hero/hero-red-layer3.svg';
import imgRed4 from '../public/images/hero/hero-red-layer4.svg';
import imgRed5 from '../public/images/hero/hero-red-layer5.svg';
import imgRed6 from '../public/images/hero/hero-red-layer6.svg';
import imgRed7 from '../public/images/hero/hero-red-layer7.svg';
import imgRed8 from '../public/images/hero/hero-red-layer8.svg';

export default function Home({ red }) {
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();

  const imagesDark = [
    imgDark1,
    imgDark2,
    imgDark3,
    imgDark4,
    imgDark5,
    imgDark6,
    imgDark7,
    imgDark8,
  ];
  const imagesRed = [
    imgRed1,
    imgRed2,
    imgRed3,
    imgRed4,
    imgRed5,
    imgRed6,
    imgRed7,
    imgRed8,
  ];

  const about = [
    {
      text: 'My name is Thanassis Mavrakis, a self taught UI designer based in Athens, Greece. I began my journey in design in early 2022 and from the first moment I knew this was what I wanted to do.',
      img: 'about-1-blue.gif',
      imgRed: 'about-1-red.gif',
      reverse: false,
    },
    {
      text: 'I am also a self taught guitarist and music composer. In my free time I enjoy the company of a good book and going out for walks with my dog.',
      img: 'about-2-blue.gif',
      imgRed: 'about-2-red.gif',
      reverse: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Thanassis Mavrakis</title>
        <meta
          name='description'
          content='Thanassis Mavrakis | UI designer, logo designer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className={styles.parallax} id='parallax-banner'>
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
                  opacity: red ? '0' : '1',
                }}
              >
                <img src={image.src} alt='Thanassis Mavrakis' />
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
                  opacity: red ? '1' : '0',
                }}
              >
                <img src={image.src} alt='Thanassis Mavrakis' />
              </div>
            );
          })}
          <div className={styles.parallax__info} id='parallax-info'>
            <h2 className={styles.parallax__info__title}>
              Hello, I am Thanassis
            </h2>
            <h4 className={styles.parallax__info__sub}>UI/UX designer</h4>
          </div>
          <div className={styles.parallax__cover}>
            <div className={styles.about}>
              <div className={styles.about__container}>
                <h2 className='title'>About me</h2>

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
                    backgroundColor: red ? '#a51003' : '#005cad',
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
