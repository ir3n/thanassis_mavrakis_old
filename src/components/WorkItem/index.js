import Image from "next/image";
import styles from "./WorkItem.module.scss";

const WorkItem = ({ img, title, url }) => {
  return (
    <div className={styles.workItem}>
      <a href={url || ""} target="_blank">
        <h2 className="title">{title}</h2>
      </a>
      <a href={url || ""} target="_blank">
        <Image
          src={`/images/work/${img}`}
          width={1124}
          height={1200}
          alt={title}
          style={{ height: "auto" }}
        />
      </a>
      <a href={url || ""} className={styles.figmaCta} target="_blank">
        <Image
          src="/images/work/figma.svg"
          width={70}
          height={70}
          alt="Figma"
        />
        <div className="text">View on Figma</div>
      </a>
    </div>
  );
};

export default WorkItem;
