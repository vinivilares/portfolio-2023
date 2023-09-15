import './globals.css';
import { Poppins } from 'next/font/google';

const lato = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Marcus Vinicius',
  description: "Marcus Vinicius's portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
