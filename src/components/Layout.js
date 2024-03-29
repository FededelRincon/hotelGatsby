import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';

import 'normalize.css';
import useSeo from '../hooks/use-seo';


const Layout = (props) => {

    const seo = useSeo();

    const { siteName, fallbackSeo: { description }} = seo;
    
    return (
        <>
            <Global 
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0%;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    
                    h1 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />

            <Helmet>
                <title> { siteName } </title>
                <meta name="description" content={ description } />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header 
                siteName={siteName}
            />

            {props.children}

            <Footer 
                siteName={siteName}
            />
        </>
    );
}
 
export default Layout;