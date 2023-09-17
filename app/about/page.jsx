import styles from './page.module.css';

import Navbar from '../components/Navbar/Navbar';

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
