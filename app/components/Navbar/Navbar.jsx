import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar({ page1, page2, page3, link1, link2, link3 }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={link1}>{page1}</Link>
        </li>
        <li>
          <Link href={link2}>{page2}</Link>
        </li>

        <li>
          <Link href={link3}>{page3}</Link>
        </li>
      </ul>
    </nav>
  );
}
