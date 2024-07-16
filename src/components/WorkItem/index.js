import styles from "./WorkItem.module.scss";

const WorkItem = ({ img, title, url }) => {
  return (
    <div className={styles.workItem}>
      <a href={url || ""} target="_blank">
        <h2 className="title">{title}</h2>
      </a>
      <a href={url || ""} target="_blank">
        <img src={`/images/work/${img}`} alt={title} />
      </a>
      <a href={url || ""} className={styles.figmaCta} target="_blank">
        <img src="/images/work/figma.svg" alt="Figma" />
        <div className="text">View on Figma</div>
      </a>
    </div>
  );
};

export default WorkItem;
