import { Inter, Josefin_Sans, Arimo } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
	subsets: ['latin'],
	weight: ['700'],
});

export const josefinSans = Josefin_Sans({
	subsets: ['latin'],
	weight: ['400'],
});

export const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const helvetica = localFont({ src: './Helvetica.woff2' });
