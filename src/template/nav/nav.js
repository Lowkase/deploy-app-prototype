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
            <ul>
                <li>
                    <Link to="/" activeClassName="active">
                        <Icon type="nav">
                            <SvgLogo />
                        </Icon>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/" activeClassName="active">
                        <Icon type="nav">
                            <SvgDashboard />
                        </Icon>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/" activeClassName="active">
                        <Icon type="nav">
                            <SvgMap />
                        </Icon>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/" activeClassName="active">
                        <Icon type="nav">
                            <SvgOther />
                        </Icon>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/" activeClassName="active">
                        <Icon type="nav">
                            <SvgSettings />
                        </Icon>
                    </Link>
                </li>                 
                <li>
                    <Link to="/dashboard/" activeClassName="active">
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