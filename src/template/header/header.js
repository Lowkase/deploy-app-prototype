import React from 'react';

import Icon from "../../components/icon/icon"

import SvgNotificationInbox from "../../assets/svgs/notificationInbox";

// HEADER
const Header = (props) => {
    return (
        <header>
            { props.children }
            <div className="notification-inbox theme-primary-color-fill">
                <Icon>
                    <SvgNotificationInbox />
                </Icon>
            </div>
            <div className="notification-inbox-count">+99</div>
        </header>
    );
}

export default Header