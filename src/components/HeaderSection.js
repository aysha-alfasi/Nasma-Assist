import React from "react";
import classes from "../styles/HeaderSection.module.css";
import avatar from "../imgs/NasmaHappyNoBackground.png";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <div className={classes.headerContainer}>
      <motion.div
        className={classes.textHalf}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        transition={{
          duration: 0.1,
          type: "spring",
        }}
      >
        <h1 className={classes.title}>Hello, I am your assistant, Nasma. </h1>
        <p className={classes.subtitle}>
          {" "}
          I hope you had a nice day! Let’s check how you’re feeling and what you
          did!
        </p>
      </motion.div>
      <div className={classes.imageHalf}>
        <motion.img
          src={avatar}
          alt="Avatar"
          className={classes.avatar}
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            rotate: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.8, 0.25, 1],
            type: "spring",
            stiffness: 80,
          }}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
