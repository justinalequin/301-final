import React, { useState } from "react";
import Modal from "react-modal";
import ModalContent from "./ModalContent";

function ModalComp() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenTrue = () => {
    setModalOpen(true);
  };

  const modalOpenFalse = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <img
        src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-cart-traditional-marketing-flatart-icons-flat-flatarticons.png"
        onClick={modalOpenTrue}
        style={{ width: "10vw" }}
      />

      <Modal isOpen={modalOpen}>
        <button
          onClick={modalOpenFalse}
          style={{
            color: "rgba(250, 5, 35, .7)",
            backgroundColor: "#05FADC",
            borderRadius: "4px",
          }}
        >
          X
        </button>
        <ModalContent></ModalContent>
      </Modal>
    </div>
  );
}

export default ModalComp;
