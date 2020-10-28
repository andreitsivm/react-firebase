import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  const openModal = (header: string, message: string) => {
    setIsOpen(true);
    setModalTitle(header);
    setModalBody(message);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalBody("");
    setModalBody("");
  };

  return { isOpen, closeModal, openModal, modalTitle, modalBody };
};
