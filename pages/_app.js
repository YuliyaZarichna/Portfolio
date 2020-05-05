import '../styles.css'
import React from 'react';
import Navigation from '../components/Navigation/NavigationItems/NavagationItems'



function MyApp({ Component, pageProps }) {
    return (
        <div className="Content">
            <Navigation className="SideBar" />
            <Component {...pageProps} />
        </div>
    )
}


export default MyApp