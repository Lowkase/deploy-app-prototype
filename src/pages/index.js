import React from "react"
import { useState } from 'react';

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header"

import Button from "../components/button/button"
import Card from "../components/card/card"
import CardGroup from "../components/cardGroup/cardGroup"

import Modal from "../components/modal/modal"
import useModal from "../components/modal/useModal"

import DrawerNotification from "../components/drawerControls/drawerControls"
import useDrawer from "../components/drawer/useDrawer"

// INDEX
const IndexPage = (props) => {
    // Theme
    const toggleTheme = () => { 
        let theme = document.getElementById("theme");
        if(theme.className === "darkTheme") {
            theme.className = "lightTheme";
        } else {
            theme.className = "darkTheme";
        }
    };

    // Modal
    const {isModalShowing, toggleModal} = useModal();

    // Drawer
    const {isDrawerShowing, toggleDrawer} = useDrawer();

    return (
        <Layout>

            <Modal isModalShowing={isModalShowing} hideModal={toggleModal} />

            <DrawerNotification 
                isDrawerShowing={isDrawerShowing} 
                hideDrawer={toggleDrawer}
                position="left"
            />

            <Header>
                <div className="title">DASHBOARD</div>
            </Header>

            <section>
                <CardGroup scheme="m-card-group-3">
                    <Card title = "Theme">
                        <Button
                            text = 'THEME SWITCH'
                            handleClick = {toggleTheme}
                            scheme = "m-button-secondary theme-secondary-color-background"
                            tabIndex = "0"
                            width = "200"
                        >
                        </Button>
                    </Card>
                    <Card title = "Modal">
                        <Button
                            text = 'SHOW MODAL'
                            handleClick={toggleModal}
                            scheme = "m-button-secondary theme-secondary-color-background"
                            tabIndex = "0"
                            width = "200"
                            >
                        </Button>
                    </Card>
                    <Card title = "Controls">
                        <Button
                            text = 'CONTROLS'
                            handleClick = {toggleDrawer}
                            scheme = "m-button-secondary theme-secondary-color-background"
                            tabIndex = "0"
                            width = "200"
                        >
                        </Button>
                    </Card>
                    <Card title = "Card Title">
                        <h1>Tooks birds precedes contains laid start.</h1>
                        <p>I will take the Ring to Mordor. Shrink interesting until devouring inside launching Isildur's? Sodding funeral fit water mustn't Smeagol.</p>
                        <h2>Troubled forged ablaze bird world's source Arwen.</h2>
                        <p>Don't you leave him, Samwise Gamgee. Horses slain unexpected been fair point worms who Elfs agents? Perish sauteed reforge Fenmarch much? Dwalin devil raising we'd draining defend!</p>
                        <h3>Required Meriadoc warts spoke committees filth hearth?</h3>
                        <p>Water Treebeard suspect northeast day's key pursuit! Suffer everyday retake Ring force kitchen cooking neck raw. Forked Smeagol's pillage sowing tale binding. Today is my 111th birthday!</p>
                        <ul>
                            <li>Gollum's!</li>
                            <li>Boromir's.</li>
                            <li>Elessar.</li>
                            <li>Bifur.</li>
                            <li>Lower.</li>
                        </ul>
                    </Card>
                    <Card>
                       This is a card without a title.
                    </Card>
                    <Card title = "Card Title">
                        Card with a title
                    </Card>  
                </CardGroup>
            </section>
        </Layout>
    );
}

export default IndexPage