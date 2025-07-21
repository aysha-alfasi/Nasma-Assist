import React from "react";
import classes from "../styles/HabitsPanel.module.css";
import morning from "../imgs/sunApp.png";
import gratitude from "../imgs/gratitude3.png";
import water from "../imgs/water.png";

const HabitsPanel = () => {
  return (
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
              style={{ width: "60%", backgroundColor: "pink" }}
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
              style={{ width: "40%", backgroundColor: "lightBlue" }}
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
              style={{ width: "20%", backgroundColor: "plum" }}
            />
          </div>
        </div>
      </div>

      <button className={classes.habitsButton}>Go to Habits</button>
    </div>
  );
};

export default HabitsPanel;
