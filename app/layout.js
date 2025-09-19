import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gijja Stop — Паразитларга қарши самарали восита',
  description:
    'Gijja Stop — табиий таркибли, хавфсиз ва самарали восита паразитларга қарши. 20 000+ одам соғлом ҳаётни танлади. Синовдан ўтган таркиблар, сертификатлар ва реал мижозлар фикрлари.',
  keywords:
    'Gijja Stop, паразитларга қарши, антипаразитар, табиий восита, соғлом ҳаёт, биологик актив қўшимча, antiparasitic, биолонг, биодобавка',
  openGraph: {
    title: 'Gijja Stop — Паразитларга қарши самарали восита',
    description:
      'Gijja Stop — табиий таркибли, хавфсиз ва самарали восита паразитларга қарши. 20 000+ одам соғлом ҳаётни танлади.',
    url: 'https://gijjastop.uz/',
    type: 'website',
    images: [
      {
        url: '/main.png',
        width: 600,
        height: 600,
        alt: 'Gijja Stop product image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gijja Stop — Паразитларга қарши самарали восита',
    description:
      'Gijja Stop — табиий таркибли, хавфсиз ва самарали восита паразитларга қарши.',
    images: ['/main.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
