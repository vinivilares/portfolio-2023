import Link from 'next/link';

import Info from '../components/Info/Info';
import Navbar from '../components/Navbar/Navbar';

import ExternalLinkIcon from '../../Icons/link-icon';

import styles from './page.module.css';

export default function Projects() {
  return (
    <>
      <Navbar
        page1={'Home'}
        link1={'/'}
        page2={'Contact me'}
        link2={'/contact'}
        page3={'About'}
        link3={'/about'}
      />
      <main className={styles.main}>
        <Info
          h1={'See my work'}
          p={'Hover over project name to see my projects'}
          words={['']}
        />

        <ul>
          <li>
            <Link
              href={'https://zine-space.vercel.app/'}
              className={styles.projectItem}
              target="_blank"
            >
              <p>Zine</p>
              <ExternalLinkIcon />
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
