import { useEffect } from "react";
import classes from "../styles/HeaderSection.module.css";
import avatar from "../imgs/NasmaHappyNoBackground.png";
import { motion, useAnimation } from "framer-motion";

const HeaderSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    };
    sequence();
  }, [controls]);

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
        <h1 className={classes.title}>Hello, I am Nasma. </h1>
        <p className={classes.subtitle}>Your sincere Assistant</p>
      </motion.div>
      <div className={classes.imageHalf}>
        <motion.img
          src={avatar}
          alt="Avatar"
          className={classes.avatar}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={controls}
          whileHover={{
            scale: 1.1,
            rotate: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
