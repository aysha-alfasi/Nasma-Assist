import React, { useState } from "react";
import Modal from "./UI/Modal";
import classes from "../styles/HabitsPanel.module.css";
import morning from "../imgs/sunApp.png";
import gratitude from "../imgs/gratitude3.png";
import water from "../imgs/water.png";

const HabitsPanel = () => {
  const [showModal, setShowModal] = useState(false);

  const GoToHabits = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.habitsBoard}>
        <h2>Habits you tracked today</h2>
        <div className={classes.habitItem}>
          <div className={classes.habitInfo}>
            <div className={classes.habitLabel}>
              <img src={morning} alt="Water" className={classes.habitIcon} />
              <span>Early Rise</span>
            </div>
            <div className={classes.progressBar}>
              <div
                className={classes.progressFill}
                style={{ width: "60%", backgroundColor: "#FF8FD2" }}
              />
            </div>
          </div>
        </div>

        <div className={classes.habitItem}>
          <div className={classes.habitInfo}>
            <div className={classes.habitLabel}>
              <img src={gratitude} alt="Water" className={classes.habitIcon} />
              <span>Gratitude</span>
            </div>
            <div className={classes.progressBar}>
              <div
                className={classes.progressFill}
                style={{ width: "40%", backgroundColor: "#77DBFF" }}
              />
            </div>
          </div>
        </div>

        <div className={classes.habitItem}>
          <div className={classes.habitInfo}>
            <div className={classes.habitLabel}>
              <img src={water} alt="Water" className={classes.habitIcon} />
              <span>Hydration</span>
            </div>
            <div className={classes.progressBar}>
              <div
                className={classes.progressFill}
                style={{ width: "20%", backgroundColor: "#ECC4FF" }}
              />
            </div>
          </div>
        </div>
        <div className={classes.btnWrapper}>
          <button onClick={GoToHabits} className={classes.habitsButton}>
            Go to Habits
          </button>
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
    </div>
  );
};

export default HabitsPanel;
