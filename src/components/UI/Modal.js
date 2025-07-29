import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export default function Modal({ image, message, onClose, actions }) {
    return createPortal(
      <div className={classes.overlay} onClick={onClose}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        {image && <img src={image} alt="reaction" className={classes.avatar} />}
          <p className={classes.message}>{message}</p>
          
          <div className={classes.buttonGroup}>
            {actions}
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
