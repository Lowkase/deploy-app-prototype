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
                        --primary-color-hover: #C2185B;
                    }
                    
                    .theme-primary-color-background {
                        background: var(--primary-color) !important;
                    }
                    .theme-primary-color-background:hover {
                        background: var(--primary-color-hover) !important;
                    }

                    .theme-primary-color-hover:hover {
                        color: var(--primary-color) !important;
                    }

                    .theme-primary-color-background {
                        background: var(--primary-color) !important;
                    }

                    .theme-primary-color-fill, .theme-primary-color-fill > svg {
                        fill: var(--primary-color) !important;
                    }

                    .theme-primary-color-fill-hover:hover {
                        fill: var(--primary-color) !important;
                    }


                    nav .theme-primary-color-active-nav svg {
                        fill: var(--primary-color) !important;
                    }
                    
                    .m-icon:hover svg {
                        fill: var(--primary-color) !important;
                    }

                    [type="radio"]:checked + label:after,
                    [type="radio"]:not(:checked) + label:after {
                        background: var(--primary-color) !important;
                    }

                    [type="checkbox"]:checked + label:after,
                    [type="checkbox"]:not(:checked) + label:after
                    {
                        background: var(--primary-color) !important;
                    }

                    [type="checkbox"]:checked + label:after
                    {
                        border: solid var(--primary-color) !important;
                    }

                    input:checked + .slider:before {
                        background: var(--primary-color) !important;
                    }

                    .m-form-pill {
                        border-color: var(--primary-color);
                    }
                    .m-form-pill:hover {
                        background: var(--primary-color);
                    }
                    .m-form-pill .con .value {
                        color: var(--primary-color);
                    }
                    .m-form-pill svg {
                        fill: var(--primary-color);
                    }

                    a {
                        color: var(--primary-color);
                    }

                    .m-form-search svg {
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