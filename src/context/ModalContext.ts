import { createContext } from "react";

export const ModalContext = createContext({
  isOpen: false,
  closeModal: () => {},
  openModal: (header: string, message: string) => {},
  modalBody: "",
  modalTitle: "",
});
