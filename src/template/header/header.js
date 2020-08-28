import React from 'react';

import Modal from "../../components/modal/modal"
import useModal from "../../components/modal/useModal"

import Icon from "../../components/icon/icon"

import SvgNotificationInbox from "../../assets/svgs/notificationInbox";

// HEADER
const Header = (props) => {
    // Modal
    const {isModalShowing, toggleModal} = useModal();

    return (
        <header>
            <Modal isModalShowing={isModalShowing} hideModal={toggleModal} />
            { props.children }
            <div className="notification-inbox theme-primary-color-fill">
                <Icon
                    type="medium"
                    handleClick={toggleModal}
                >
                    <SvgNotificationInbox />
                </Icon>
            </div>
            <div className="notification-inbox-count">+99</div>
        </header>
    );
}

export default Header