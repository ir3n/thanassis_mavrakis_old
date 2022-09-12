import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = ({ red, executeScroll, scrollRef }) => {
  return (
    <footer
      className={styles.footer}
      style={{
        backgroundColor: red ? '#5F0200' : '#000930',
      }}
    >
      <img
        className={styles.footer__bg}
        src='/images/footer/footer-blue.svg'
        alt="Let's create together"
        style={{
          opacity: red ? '0' : '1',
        }}
      />
      <div className='absolute'>
        <img
          className={styles.footer__bg}
          src='/images/footer/footer-red.svg'
          alt="Let's create together"
          style={{
            opacity: red ? '1' : '0',
          }}
        />
      </div>

      <div className={styles.footer__info}>
        <h2 className='title' style={{ textAlign: 'center', color: '#FFFFFF' }}>
          Let's create together
        </h2>
        <div className={styles.social}>
          <div className={styles.social__icon}>
            <a
              href='https://www.instagram.com/thanassis.mavrakis/'
              target='_blank'
            >
              Instagram
              <img src='/images/footer/instagram.svg' alt='Instagram' />
            </a>
          </div>
          <div className={styles.social__icon}>
            <a
              href='https://www.linkedin.com/in/thanassis-mavrakis-231b3a244'
              target='_blank'
            >
              Linkedin
              <img src='/images/footer/linkedin.svg' alt='Linkedin' />
            </a>
          </div>
          <div className={styles.social__icon}>
            <a href='mailto:thanassis.mavrakis@gmail.com'>
              Email
              <img src='/images/footer/email.svg' alt='Email' />
            </a>
          </div>
          <div className={styles.social__icon}>
            <a href='https://www.shutterstock.com/g/Thanassis' target='_blank'>
              Shutterstock
              <img src='/images/footer/shutterstock.svg' alt='Shutterstock' />
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          {`© ${new Date().getFullYear()} All rights reserved.`}
          <br />{' '}
          {`Designed by Thanassis
          Mavrakis. Coded by Irene Borada.`}
        </div>
      </div>
      <button
        className={styles.scroll}
        onClick={() => {
          scrollRef
            ? executeScroll()
            : window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <img src='/images/footer/top-arrow.svg' alt='Scroll to top' />
      </button>
    </footer>
  );
};

export default Footer;
