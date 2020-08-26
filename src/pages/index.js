import React from "react"
import { useState } from 'react';

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header"

import Button from "../components/button/button"

import Modal from "../components/modal/modal"
import useModal from "../components/modal/useModal"

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

    return (
        <Layout>
            <Modal isModalShowing={isModalShowing} hideModal={toggleModal} />

            <Header>
                <div className="title">DASHBOARD</div>
            </Header>

            <section>
                <Button
                    text = 'THEME SWITCH'
                    handleClick = {toggleTheme}
                    scheme = "m-button-primary"
                    tabIndex = "0"
                >
                </Button>


                <button onClick={toggleModal}>Show Modal</button>



                <div>
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
                    <ul>
                        <li>Forebearers favorite gather Wizards halls.</li>
                        <li>Vagabond tempted Thorin promised pace wager.</li>
                        <li>Greed toss no mindless number language Brego ready surety orders?</li>
                        <li>Rises locking fried tested Radagast the Brown.</li>
                        <li>Dragged defeats nothing's distance hungry Bar-hrum courage.</li>
                    </ul>
                    <h3>Mind brats possible Gamgee addled skin-changer ruby.</h3>
                    <p>Witch-king machine liquor escaped smallest. Grond horror wide distract fruity collared defenses. Do not take me for some conjurer of cheap tricks. Generous permitted unmade wandering Tooks concealed perfected.</p>

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
                    <ul>
                        <li>Forebearers favorite gather Wizards halls.</li>
                        <li>Vagabond tempted Thorin promised pace wager.</li>
                        <li>Greed toss no mindless number language Brego ready surety orders?</li>
                        <li>Rises locking fried tested Radagast the Brown.</li>
                        <li>Dragged defeats nothing's distance hungry Bar-hrum courage.</li>
                    </ul>
                    <h3>Mind brats possible Gamgee addled skin-changer ruby.</h3>
                    <p>Witch-king machine liquor escaped smallest. Grond horror wide distract fruity collared defenses. Do not take me for some conjurer of cheap tricks. Generous permitted unmade wandering Tooks concealed perfected.</p>
                </div>
            </section>
        </Layout>
    );
}

export default IndexPage