import Link from 'next/link';

import Info from './components/Info/Info';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Info
        h1={'Hello World'}
        p={"My name is Marcus and I'm a "}
        words={['Developer', 'Designer', 'Nerd']}
      />
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
