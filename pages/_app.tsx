import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Labels, LabelsProvider } from '../hooks/labels';

function MyApp({ Component, pageProps }: AppProps<{ serverLabels?: Labels}>) {
	const { serverLabels } = pageProps;
	let comp = <Component {...pageProps} />;

	// Store server fetched labels in Context so each component can access them
	if (serverLabels) {
		comp = (
			<LabelsProvider labels={serverLabels}>
				{comp}
			</LabelsProvider>
		)
	}

	return comp;
}

export default MyApp;
