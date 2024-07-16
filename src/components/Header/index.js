"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo}>
        <Image
          src="images/logo.svg"
          width={128}
          height={97}
          alt="Thanassis Mavrakis"
        />
      </Link>
      <Link
        href={pathname === "/" ? "/work" : "/"}
        className={styles.header__cta}
      >
        {pathname === "/" ? "My Work" : "Home"}
      </Link>
    </header>
  );
};

export default Header;
