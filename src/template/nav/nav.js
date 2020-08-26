import React from 'react';
import { Link } from "gatsby"

import Icon from "../../components/icon/icon"

import SvgDashboard from "../../assets/svgs/dashboard";
import SvgLogo from "../../assets/svgs/logo";
import SvgMap from "../../assets/svgs/map";
import SvgOther from "../../assets/svgs/other";
import SvgSettings from "../../assets/svgs/settings";
import SvgUser from "../../assets/svgs/user";

// NAV
const Nav = (props) => {
    return (
        <nav>
            <ul className="logo">
                <li>
                    <Link to="/">
                        <Icon type="nav">
                            <SvgLogo className="theme-primary-color-fill" />
                        </Icon>
                    </Link>
                </li>
            </ul>            
            <ul className="site">
                <li>
                    <Link to="/" activeClassName="theme-primary-color-active-nav">
                        <Icon type="nav">
                            <SvgDashboard />
                        </Icon>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/" activeClassName="theme-primary-color-active-nav">
                        <Icon type="nav">
                            <SvgMap />
                        </Icon>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/" activeClassName="theme-primary-color-active-nav">
                        <Icon type="nav">
                            <SvgOther />
                        </Icon>
                    </Link>
                </li>
            </ul>
            <ul className="util">
                <li>
                    <Link to="/dashboard/" activeClassName="theme-primary-color-active-nav">
                        <Icon type="nav">
                            <SvgSettings />
                        </Icon>
                    </Link>
                </li>                 
                <li>
                    <Link to="/dashboard/" activeClassName="theme-primary-color-active-nav">
                        <Icon type="nav">
                            <SvgUser />
                        </Icon>
                    </Link>
                </li>                                
            </ul>
        </nav>
    );
}

export default Nav