'use strict';

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import SiteHeader from '~/components/site-header';
import SiteFooter from '~/components/site-footer';

// Log accessibility issues to console in non-production environments
if (process.env.APP_ENV !== 'production' && typeof window !== 'undefined') {
	const ReactDOM = require('react-dom');
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Simon Hudson Photography</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<SiteHeader {...pageProps} />
				<main>
					<Component {...pageProps} />
				</main>
				<SiteFooter {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
