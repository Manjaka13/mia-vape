import React from "react";
import Head from "next/head";

/**
 * Page heading tags
 */

const Heading = ({ title, description, image }) => (
	<Head>
		<meta charSet="utf-8" />
		<title>{title}</title>
		<link rel="shortcut icon" href="/images/logo-mia-vape.webp" />
		<meta name="theme-color" content="#28ffbf" />
		<link rel="manifest" href="/manifest.json" />
		<meta name="robots" content="index, follow" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
		/>
		<meta httpEquiv="language" content="en" />
		<meta name="author" content="Hari13 <manjaka.rajaonson@gmail.com>" />
		<meta name="description" content={description} />
		<meta name="generator" content="NextJS" />
		<meta httpEquiv="language" content="fr" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="fr_FR" />
		<meta property="og:image" content={image} />
		<meta property="og:site_name" content="Mia vape" />
	</Head>
);

export default Heading;
