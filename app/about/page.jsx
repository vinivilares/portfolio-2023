import Navbar from '../components/Navbar/Navbar';

import styles from './page.module.css';

export default function About() {
  return (
    <>
      <Navbar
        page1={'Home'}
        link1={'/'}
        page2={'Contact me'}
        link2={'/contact'}
        page3={'Projects'}
        link3={'/projects'}
      />
      <main className={styles.main}>
        <h1>About Page</h1>
      </main>
    </>
  );
}
