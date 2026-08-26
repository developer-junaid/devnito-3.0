"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { ContactFormModal } from "@/components/contact-form-modal";

interface ContactFormContextValue {
  openContactForm: () => void;
  closeContactForm: () => void;
  source?: string;
}

const ContactFormContext = createContext<ContactFormContextValue>({
  openContactForm: () => {},
  closeContactForm: () => {},
});

export function useContactForm() {
  return useContext(ContactFormContext);
}

export function ContactFormProvider({
  children,
  source,
}: {
  children: ReactNode;
  source?: string;
}) {
  const [open, setOpen] = useState(false);

  const openContactForm = useCallback(() => setOpen(true), []);
  const closeContactForm = useCallback(() => setOpen(false), []);

  return (
    <ContactFormContext.Provider
      value={{ openContactForm, closeContactForm, source }}
    >
      {children}
      <ContactFormModal open={open} onClose={closeContactForm} source={source} />
    </ContactFormContext.Provider>
  );
}
