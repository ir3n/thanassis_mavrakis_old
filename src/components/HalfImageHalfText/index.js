import Image from "next/image";
import styles from "./HalfImageHalfText.module.scss";

const HalfImageHalfText = ({ img, imgRed, text, reverse, red }) => {
  return (
    <div className={`${styles.halfComponent} ${reverse ? "reverse" : ""}`}>
      <p className="text half">{text}</p>
      <div className={styles.imageWrapper}>
        <Image
          src={img}
          // width={400}
          // height={400}
          fill
          alt="Thanassis Mavrakis"
          style={{
            opacity: red ? "0" : "1",
          }}
        />
        <div className="absolute">
          <Image
            src={imgRed}
            // width={400}
            // height={400}
            fill
            alt="Thanassis Mavrakis"
            style={{
              opacity: red ? "1" : "0",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HalfImageHalfText;
