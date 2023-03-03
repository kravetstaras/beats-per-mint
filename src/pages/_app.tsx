import { Provider } from 'next-auth/client';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import { arimo } from '@/styles/fonts';
import theme from '@/styles/material-theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<Header />
				<main className={arimo.className}>
					<CssBaseline />
					<Component {...pageProps} />
				</main>
				<Footer />
			</ThemeProvider>
		</Provider>
	);
}
