import { Montserrat, Merriweather } from 'next/font/google';

export const titleFont = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-title',
  display: 'swap',
});

export const bodyFont = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
  display: 'swap',
});
