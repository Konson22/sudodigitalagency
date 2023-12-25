import { useState, useContext, createContext } from "react";

const contextApi = createContext();

export default function ContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);
  return (
    <contextApi.Provider value={{ openModal, toggleModal }}>
      {children}
    </contextApi.Provider>
  );
}

export const useContextApi = () => useContext(contextApi);
