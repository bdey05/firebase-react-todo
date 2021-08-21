import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from "react";
import { projectFirestore,timestamp } from "./firebase/config";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const ModalTest = ({ id }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    /*function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }*/
  
    function closeModal(e) {
      e.preventDefault();
      let task = e.target[0].value;
      projectFirestore.collection('tasks').doc(id).update({task});
      setIsOpen(false);
    }


    return ( 
        <div className="modalBox">
      <button onClick={openModal}><i class="fas fa-edit"></i></button>
      <Modal
        isOpen={modalIsOpen}
        /*onAfterOpen={afterOpenModal}*/
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('root')}
      >
        
        <form onSubmit={closeModal}>
            <input type="text" required />
            <button className="update">Update</button>
        </form>
        
      </Modal>
    </div>
     );
}
 
export default ModalTest;