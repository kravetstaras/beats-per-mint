import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import MainHeader from '@/components/Layout/MainHeader';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider session={pageProps.session}>
			<MainHeader />
			<Component {...pageProps} />
		</Provider>
	);
}
