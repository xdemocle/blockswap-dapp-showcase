import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

export const Main = ({ children }: ModalProps) => (
  <main className="w-full max-w-lg mx-auto">{children}</main>
);

export const Footer = ({ children }: ModalProps) => (
  <footer className="w-full max-w-lg mx-auto flex justify-end">
    {children}
  </footer>
);

const Modal = ({ children }: ModalProps) => (
  <section className="z-50 fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-popup-overlay dark:text-white">
    <div className="w-full bg-popup-background max-w-lg rounded-xl p-6">
      {children}
    </div>
  </section>
);

Modal.Main = Main;
Modal.Footer = Footer;

export default Modal;
