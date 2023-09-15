import Navbar from '../components/Navbar/Navbar';

export default function Contact() {
  return (
    <main>
      <Navbar
        page1={'Home'}
        link1={'/'}
        page2={'Projects'}
        link2={'/projects'}
        page3={'About'}
        link3={'/about'}
      />
      <h1>Contact Page</h1>
    </main>
  );
}
