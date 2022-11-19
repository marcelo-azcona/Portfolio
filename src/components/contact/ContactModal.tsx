import React from 'react';
import './ContactModal.styles.scss';

type ModalProps = {
  modalMessage: string;
};

const closeModalHandler = () => {};

const ContactModal = ({ modalMessage }: ModalProps) => {
  return (
    <div className="overlay" onClick={closeModalHandler}>
      <div className="modal">
        <div className="modal__message">
          {modalMessage}
          <div className="modal__action">
            <button className="modal_btn" onClick={closeModalHandler}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
