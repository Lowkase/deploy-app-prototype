import React from 'react';

import Drawer from "../../components/drawer/drawer"
import useDrawer from "../../components/drawer/useDrawer"

import Icon from "../../components/icon/icon"
import SvgNotificationInbox from "../../assets/svgs/notificationInbox";

// HEADER
const Header = (props) => {
    // Modal
    const {isDrawerShowing, toggleDrawer} = useDrawer();

    return (
        <header>
            <Drawer isDrawerShowing={isDrawerShowing} hideDrawer={toggleDrawer} />
            { props.children }
            <div className="notification-inbox theme-primary-color-fill">
                <Icon
                    type="medium"
                    handleClick={toggleDrawer}
                >
                    <SvgNotificationInbox />
                </Icon>
            </div>
            <div className="notification-inbox-count">+99</div>
        </header>
    );
}

export default Header