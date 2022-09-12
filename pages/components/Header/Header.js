import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

import logo from '../../../public/images/logo.svg';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.header__logo}>
          <Image src={logo} alt='Thanassis Mavrakis' />
        </a>
      </Link>
      <Link href={router.pathname === '/' ? '/work' : '/'}>
        <a className={styles.header__cta}>
          {router.pathname === '/' ? 'My Work' : 'Home'}
        </a>
      </Link>
    </header>
  );
};

export default Header;
