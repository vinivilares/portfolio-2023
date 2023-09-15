import Navbar from '../components/Navbar/Navbar';

export default function Projects() {
  return (
    <main>
      <Navbar
        page1={'Home'}
        link1={'/'}
        page2={'Contact me'}
        link2={'/contact'}
        page3={'About'}
        link3={'/about'}
      />
      <h1>Project page</h1>
    </main>
  );
}
