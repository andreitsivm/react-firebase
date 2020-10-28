import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { ModalContext } from "./context/ModalContext";
import "./App.scss";
import { useModal } from "./hooks/useModal";
import Modal from "./components/Modal/Modal";

function App() {
  const { isOpen, closeModal, openModal, modalBody, modalTitle } = useModal();

  return (
    <Router>
      <ModalContext.Provider
        value={{
          isOpen,
          closeModal,
          openModal,
          modalBody,
          modalTitle,
        }}
      >
        <Modal />
        <Routes />
      </ModalContext.Provider>
    </Router>
  );
}

export default App;
