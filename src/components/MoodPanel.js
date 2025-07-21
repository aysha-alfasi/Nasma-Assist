import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import happyImg from "../imgs/happy.png";
import classes from "../styles/MoodPanel.module.css";
import normalImg from "../imgs/normal.png";
import sadImg from "../imgs/sad2.png";
import angryImg from "../imgs/angry.png";

const moods = {
  happy: {
    color: "#FFF480",
    image: happyImg,
    sound: "/sounds/happy.mp3",
    reaction: "Yay! I’m glad you’re happy!",
  },
  neutral: {
    color: "#E4F5E9",
    image: normalImg,
    sound: "/sounds/normal.mp3",
    reaction: "Alright, a calm day!",
  },
  sad: {
    color: "#77DBFF",
    image: sadImg,
    sound: "/sounds/sad.mp3",
    reaction: "Aww, sending you a warm hug!",
  },
  angry: {
    color: "#FFA9AB",
    image: angryImg,
    sound: "/sounds/angry.mp3",
    reaction: "Let it out! I’m here for you.",
  },
};

const MoodPanel = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

    const sound = new Audio(moods[moodKey].sound);
    sound.play();

    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  };

  return (
    <motion.div
      className={classes.moodBoard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        backgroundColor: selectedMood ? moods[selectedMood].color : "#eee",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <h2>How was your mood?</h2>
      <div className={classes.moodOptions}>
        {Object.keys(moods).map((mood) => (
          <img
            key={mood}
            src={moods[mood].image}
            alt={mood}
            className={classes.moodIcon}
            onClick={() => handleMoodClick(mood)}
          />
        ))}
      </div>

      {/*       {showModal && (
        <Modal message={moods[selectedMood].reaction} onClose={() => setShowModal(false)} />
      )} */}
    </motion.div>
  );
};

export default MoodPanel;
