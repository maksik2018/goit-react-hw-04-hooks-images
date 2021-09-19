import React, {useEffect} from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);

    }
  }, [onClose]);
  // componentDidMount() {
  //   window.addEventListener("keydown", this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.handleKeyDown);
  // }


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  // render() {
    return createPortal(
      <div onClick={handleOverlayClick} className="Overlay">
        <div className="Modal">{children}</div>
      </div>,

      modalRoot
    );
  }
// }
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
