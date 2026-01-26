"use client";

import { createContext, useContext, useState } from "react";
import UpdatesModal from "@/components/updates/UpdatesModal";

const UpdatesModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useUpdatesModal = () => {
  const context = useContext(UpdatesModalContext);
  if (!context) {
    throw new Error("useUpdatesModal must be used within UpdatesModalProvider");
  }
  return context;
};

export function UpdatesModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <UpdatesModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <UpdatesModal isOpen={isOpen} onClose={closeModal} />
    </UpdatesModalContext.Provider>
  );
}

