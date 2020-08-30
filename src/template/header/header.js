import React from 'react';

import DrawerNotification from "../../components/drawerNotification/drawerNotification"
import useDrawer from "../../components/drawer/useDrawer"

import Icon from "../../components/icon/icon"
import SvgNotificationInbox from "../../assets/svgs/notificationInbox";

// HEADER
const Header = (props) => {
    // Drawer
    const {isDrawerShowing, toggleDrawer} = useDrawer();

    return (
        <header>
            <DrawerNotification 
                isDrawerShowing={isDrawerShowing} 
                hideDrawer={toggleDrawer}
                position="right"
            />
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