import { Provider } from 'next-auth/client';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Inter, Josefin_Sans, Arimo } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import MainHeader from '@/components/Layout/MainHeader';

import theme from '@/styles/material-theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MainHeader />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
}
