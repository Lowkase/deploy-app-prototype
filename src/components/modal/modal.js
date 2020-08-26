import React from 'react';
import ReactDOM from 'react-dom';

// MODAL
// NOTE - Tell createPortal which DOM element to place the modal into (e.g. "theme")

const Modal = ({ isModalShowing, hideModal }) => isModalShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-mask"/>
        <div className="modal-con" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p>
                    Hello, I'm a modal.
                </p>
            </div>
        </div>
    </React.Fragment>, document.getElementById("theme")
) : null;

export default Modal;