import Navbar from '../components/Navbar/Navbar';

export default function About() {
  return (
    <main>
      <Navbar
        page1={'Home'}
        link1={'/'}
        page2={'Contact me'}
        link2={'/contact'}
        page3={'Projects'}
        link3={'/projects'}
      />
      <h1>About Page</h1>
    </main>
  );
}
