import classes from '../styles/HomePage.module.css';
import HeaderSection from './HeaderSection';
import MoodPanel from './MoodPanel';
import HabitsPanel from './HabitsPanel';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <HeaderSection />
      <MoodPanel />
      <HabitsPanel />
    </div>
  );
};

export default HomePage;
