import styles from './HalfImageHalfText.module.scss';

const HalfImageHalfText = ({ img, imgRed, text, reverse, red }) => {
  return (
    <div className={`${styles.halfComponent} ${reverse ? 'reverse' : ''}`}>
      <p className='text half'>{text}</p>
      <div className={styles.imageWrapper}>
        <img
          src={img}
          alt='Thanassis Mavrakis'
          style={{
            opacity: red ? '0' : '1',
          }}
        />
        <div className='absolute'>
          <img
            src={imgRed}
            alt='Thanassis Mavrakis'
            style={{
              opacity: red ? '1' : '0',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HalfImageHalfText;
