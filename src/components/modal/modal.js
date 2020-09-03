import React from 'react';
import ReactDOM from 'react-dom';

import Button from "../../components/button/button"
import ButtonGroup from "../../components/buttonGroup/buttonGroup"
import Icon from "../../components/icon/icon"

import SvgClose from "../../assets/svgs/close";

// MODAL
// NOTE - Tell createPortal which DOM element to place the modal into (e.g. "theme")

const Modal = ({ isModalShowing, hideModal }) => isModalShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-mask"/>
        <div className="modal-con" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <div>Modal Header</div>
                    <Icon type="small modal-close-button" handleClick={hideModal} data-dismiss="modal" aria-label="Close" role="button">
                        <SvgClose />
                    </Icon>
                </div>
                <div className="modal-content">

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

                </div>
                <div className="modal-footer">
                    <ButtonGroup
                        scheme = 'm-button-group-right'
                    >
                        <Button 
                            aria-label="Cancel" 
                            className="m-button" 
                            data-dismiss="modal" 
                            handleClick={hideModal}
                            scheme="m-button-secondary"
                            text="Cancel"
                        >
                        </Button>
                        <Button 
                            aria-label="Apply" 
                            className="m-button" 
                            data-dismiss="modal" 
                            handleClick={hideModal}
                            scheme="m-button-primary theme-primary-color-background"
                            text="Apply"
                        >
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    </React.Fragment>, document.getElementById("theme")
) : null;

export default Modal;