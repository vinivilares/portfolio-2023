import Link from 'next/link';

import styles from './page.module.css';

import Info from './components/Info';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Info />
      </section>
      <nav>
        <ul>
          <li>
            <Link href={'/projects'}>Projects</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact me</Link>
          </li>

          <li>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
