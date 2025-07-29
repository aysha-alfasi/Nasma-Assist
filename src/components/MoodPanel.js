import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Modal from "./UI/Modal";
import happyImg from "../imgs/happy.png";
import classes from "../styles/MoodPanel.module.css";
import normalImg from "../imgs/normal.png";
import sadImg from "../imgs/sad2.png";
import angryImg from "../imgs/angry.png";
import happyNasma from "../imgs/happyNasma.png";
import neutralNasma from "../imgs/hintNasma.png";
import sadNasma from "../imgs/sadNasma.png";
import angryNasma from "../imgs/angryNasma.png";

const moods = {
  happy: {
    color: "#FFF480",
    image: happyImg,
    reactionImage: happyNasma,
    name: "Happy",
    sound: "/sounds/happy.mp3",
    reaction: "Wow! Happy to know this! Enjoy your day",
  },
  neutral: {
    color: "#E4F5E9",
    image: normalImg,
    reactionImage: neutralNasma,
    name: "Neutral",
    sound: "/sounds/normal.mp3",
    reaction: "Calm day then! want ideas to make it wonderful?",
  },
  sad: {
    color: "#77DBFF",
    image: sadImg,
    reactionImage: sadNasma,
    name: "Sad",
    sound: "/sounds/sad.mp3",
    reaction: "Oh! I may be small… but I’m here, just for you",
  },
  angry: {
    color: "#FFA9AB",
    image: angryImg,
    reactionImage: angryNasma,
    name: "Angry",
    sound: "/sounds/angry.mp3",
    reaction: "What?! They dared upset you? Breathe… I’m here.",
  },
};

const MoodPanel = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("mood");

  const controls = useAnimation();
  useEffect(() => {
    if (selectedMood) {
      const runPulse = async () => {
        await controls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      };
      runPulse();
    }
  }, [selectedMood, controls]);

  const handleMoodClick = (moodKey) => {
    setSelectedMood(moodKey);
    setModalType("mood");
    setShowModal(false);

    const sound = new Audio(moods[moodKey].sound);
    sound.play();

    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFeatureInProgress = () => {
    setModalType("feature");
    setShowModal(true);
  };

  return (
    <div className={classes.wrapper}>
      <motion.div
        className={classes.moodBoard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundColor: selectedMood ? moods[selectedMood].color : "#fbebff",
        }}
        whileTap={{ scale: 0.98 }}
      >
        <h2>How was your mood?</h2>
        <div className={classes.moodOptions}>
          {Object.keys(moods).map((mood) => (
            <div key={mood} className={classes.moodItem}>
              <img
                src={moods[mood].image}
                alt={mood}
                className={classes.moodIcon}
                onClick={() => handleMoodClick(mood)}
              />
              <p className={classes.moodName}>{moods[mood].name}</p>
            </div>
          ))}
        </div>

        {showModal && modalType === "mood" && (
          <Modal
            image={moods[selectedMood].reactionImage}
            message={moods[selectedMood].reaction}
            actions={
              <>
                <button onClick={handleFeatureInProgress} className="button">
                  Get a hint!
                </button>
                <button onClick={handleCloseModal} className="button">
                  Close
                </button>
              </>
            }
          />
        )}

        {showModal && modalType === "feature" && (
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
      </motion.div>
    </div>
  );
};

export default MoodPanel;
