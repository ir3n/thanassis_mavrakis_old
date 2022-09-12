import Link from 'next/link';
import styles from './TitleImagesCta.module.scss';

const TitleImagesCta = ({ red }) => {
  return (
    <div className={styles.TitleImagesCta}>
      <h2 className='title' style={{ textAlign: 'center' }}>
        A small taste of my work
      </h2>
      <div className={styles.images}>
        <img src='/images/work/work-teaser-1.png' alt='My work' />
        <img src='/images/work/work-teaser-2.png' alt='My work' />
        <img src='/images/work/work-teaser-3.png' alt='My work' />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link href='/work' passHref>
          <a className={red ? 'main-cta-red' : 'main-cta-blue'}>See more</a>
        </Link>
      </div>
    </div>
  );
};

export default TitleImagesCta;
