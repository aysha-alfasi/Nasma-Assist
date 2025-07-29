import React, { useState } from "react";
import Modal from "./UI/Modal";
import classes from "../styles/BottomNavigations.module.css";
import calendarIcon from "../imgs/calendar.png";
import overviewIcon from "../imgs/overviewnew.png";
import goalsIcon from "../imgs/overview.png";

const BottomNavigation = () => {
  const [showModal, setShowModal] = useState(false);

  const GoTofeature = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.navContainer}>
      <div className={classes.navItem}>
        <img
          src={calendarIcon}
          alt="Calendar"
          className={classes.icon}
          onClick={GoTofeature}
        />
        <span className={classes.label}>Calendar</span>
      </div>
      <div className={classes.navItem}>
        <img
          src={overviewIcon}
          alt="Overview"
          className={classes.icon}
          onClick={GoTofeature}
        />
        <span className={classes.label}>Overview</span>
      </div>
      <div className={classes.navItem}>
        <img
          src={goalsIcon}
          alt="Goals"
          className={classes.icon}
          onClick={GoTofeature}
        />
        <span className={classes.label}>Goals</span>
      </div>
      {showModal && (
        <Modal
          image={null}
          message="This feature is under progress!"
          onClose={handleCloseModal}
          actions={
            <button onClick={handleCloseModal} className="button">
              Ok
            </button>
          }
        />
      )}
    </div>
  );
};

export default BottomNavigation;
