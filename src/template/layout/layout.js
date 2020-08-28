import React from 'react';
import { Helmet } from "react-helmet";

import Nav from "../nav/nav.js"
import Main from "../main/main.js"

// LAYOUT
const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <style type="text/css">{`
                    :root {
                        --primary-color: #EC407A;
                    }
                    
                    .theme-primary-color-background {
                        background: var(--primary-color) !important;
                    }
                    
                    .theme-primary-color-fill, .theme-primary-color-fill > svg {
                        fill: var(--primary-color) !important;
                    }


                    nav .theme-primary-color-active-nav svg {
                        fill: var(--primary-color) !important;
                    }
                    
                    .m-icon:hover svg {
                        fill: var(--primary-color) !important;
                    }
                `}</style>
            </Helmet>
            <div id="theme" className="darkTheme">
                <div className="app t-layout">
                    <Nav/>
                    <Main props = { props.children }></Main>
                </div>
            </div>
        </div>
    );
}

export default Layout