import { useRef, createContext, useState, useContext } from "react";
import { X } from "lucide-react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <ModalWrapper onClose={closeModal}>{modalContent}</ModalWrapper>
      )}
    </ModalContext.Provider>
  );
};

// Now let's create the ModalWrapper

const ModalWrapper = ({ children, onClose }) => {
  const modalRef = useRef();

  const handleBackdropClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-60 flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-grey-400 hover:tetxt-black cursor-pointer"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export const useModal = () => useContext(ModalContext);
