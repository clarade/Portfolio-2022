import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ConfigProvider } from '../components/ConfigContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ConfigProvider>
	);
}

export default MyApp;
