import Link from 'next/link';

import styles from './page.module.css';

import GithubIcon from '../../Icons/github-icon';
import LinkedinIcon from '../../Icons/linkedin-icon';
import MailIcon from '../../Icons/mail-icon';
import Info from '../components/Info/Info';
import Navbar from '../components/Navbar/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar
        page1={'Home'}
        link1={'/'}
        page2={'Projects'}
        link2={'/projects'}
        page3={'About'}
        link3={'/about'}
      />
      <main className={`${styles.main} ${styles.centered}`}>
        <Info
          h1={'Contact Me'}
          p={'Send me an '}
          words={['email', 'message']}
        />
        <ul>
          <li>
            <MailIcon />
          </li>
          <li>
            <Link href={'https://github.com/vinivilares/'} target="_blank">
              <GithubIcon />
            </Link>
          </li>
          <li>
            <Link
              href={'https://www.linkedin.com/in/vinivilares/'}
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
