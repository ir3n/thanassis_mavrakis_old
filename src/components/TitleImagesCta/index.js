import Link from "next/link";
import Image from "next/image";
import styles from "./TitleImagesCta.module.scss";

const workTeasers = [
  "work-teaser-1.png",
  "work-teaser-2.png",
  "work-teaser-3.png",
];

const TitleImagesCta = ({ red }) => {
  return (
    <div className={styles.TitleImagesCta}>
      <h2 className="title" style={{ textAlign: "center" }}>
        A small taste of my work
      </h2>
      <div className={styles.images}>
        {workTeasers.map((item, index) => (
          <div key={`work-teaser-${index}`} className={styles.imageWrapper}>
            <Image
              src={`/images/work/${item}`}
              width={500}
              height={586}
              alt="My work"
            />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <Link href="/work" className={red ? "main-cta-red" : "main-cta-blue"}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default TitleImagesCta;
