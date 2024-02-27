import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '유데미 타임어택 중고마켓',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
