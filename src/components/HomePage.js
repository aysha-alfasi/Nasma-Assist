import classes from '../styles/HomePage.module.css';
import HeaderSection from './HeaderSection';
import MoodPanel from './MoodPanel';
import HabitsPanel from './HabitsPanel';
import BottomNavigation from './BottomNavigations';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <HeaderSection />
      <MoodPanel />
      <HabitsPanel />
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
