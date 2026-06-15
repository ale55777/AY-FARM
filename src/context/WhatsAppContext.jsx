import { createContext, useContext, useState } from "react";

const WhatsAppCtx = createContext(null);

export function WhatsAppProvider({ children }) {
  const [open,     setOpen]     = useState(false);
  const [defaults, setDefaults] = useState({});

  /** openModal({ interest: "Chaunsa Mango" }) — all fields optional */
  const openModal  = (opts = {}) => { setDefaults(opts); setOpen(true);  };
  const closeModal = ()          => setOpen(false);

  return (
    <WhatsAppCtx.Provider value={{ open, defaults, openModal, closeModal }}>
      {children}
    </WhatsAppCtx.Provider>
  );
}

export const useWhatsApp = () => useContext(WhatsAppCtx);
