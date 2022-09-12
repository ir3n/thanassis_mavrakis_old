import Link from 'next/link';
import styles from './WorkItem.module.scss';

const WorkItem = ({ img, title, url }) => {
  return (
    <div className={styles.workItem}>
      <Link href={url || ''} passHref>
        <a target='_blank'>
          <h2 className='title'>{title}</h2>
        </a>
      </Link>
      <Link href={url || ''} passHref>
        <a target='_blank'>
          <img src={`/images/work/${img}`} alt={title} />
        </a>
      </Link>
      <Link href={url || ''} passHref>
        <a className={styles.figmaCta} target='_blank'>
          <img src='/images/work/figma.svg' alt='Figma' />
          <div className='text'>View on Figma</div>
        </a>
      </Link>
    </div>
  );
};

export default WorkItem;
