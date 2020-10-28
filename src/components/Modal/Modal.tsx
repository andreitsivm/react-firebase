import React, { useContext } from "react";
import Portal from "../Portal/Portal";
import { ModalContext } from "../../context/ModalContext";
import "./Modal.scss";
import { Button } from "../Button/Button";

const Modal = () => {
  const modal = useContext(ModalContext);
  const { isOpen, closeModal, modalBody, modalTitle } = modal;

  return (
    <>
      {isOpen && (
        <Portal>
          <div>
            <div className="modal__overlay">
              <div className="modal__window" onBlur={closeModal}>
                <div className="modal__body">
                  <div className="modal__header">
                    <h1>{modalTitle}</h1>
                    <div className="modal-btn" onClick={closeModal}>
                      x
                    </div>
                  </div>
                  <div className="modal__content">
                    <p>{modalBody}</p>
                  </div>
                  <div className="modal__footer">
                    <Button
                      //   className="small"
                      onClick={closeModal}
                    >
                      Great
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
