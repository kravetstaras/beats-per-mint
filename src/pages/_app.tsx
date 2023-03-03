import { Provider } from 'next-auth/client';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

import MainHeader from '@/components/Layout/MainHeader';

import { arimo } from '@/styles/fonts';
import theme from '@/styles/material-theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<MainHeader />
				<main className={arimo.className}>
					<CssBaseline />
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</Provider>
	);
}
