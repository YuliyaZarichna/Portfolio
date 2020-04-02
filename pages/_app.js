import '../styles.css'
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}


export default MyApp