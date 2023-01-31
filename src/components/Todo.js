// useState is a function exposed by React library which we can use in component functions
// useState register different states which we wanna support in our React application
// React will "react" to changes in that state..
// ..and allow us to render different outputs depending on which state is active
// useState is a React hook which can only be called directly in React component function
// also it can be called in custom hooks !!!
// calling useState creates a state react as a ware off
// we can give this state a starting value by passing it here as a argument to useState
// it could be false if our state is that we wanna control wether the modal is open or not

import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    // initially the modal should not be open so the initial state is "false"
    // useState returns an array with two elements (we can store the array in a constant...):
    // (1) the current state value "ModalIsOpen"
    // (2) a function that can be used to update the state "setMOdalIsOpen"

    const [ModalIsOpen, setMOdalIsOpen] = useState(false);

    function deleteHandler() {
        // set "setMOdalIsOpen" to "true" to change the state "useState(false)" from false to true
        setMOdalIsOpen(true);
    }

    function closeModalHandler() {
        // set "setMOdalIsOpen" to "false" to change the state "useState(true)" from true to false to close the modal when clicked on the backdrop
        setMOdalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>

            {ModalIsOpen && (
                <Modal
                    onCancel={closeModalHandler}
                    onConfirm={closeModalHandler}
                />
            )}
            {ModalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}

export default Todo;
