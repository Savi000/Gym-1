import Slider from './Slider';
import classes from '../styles/TeamMembers.module.scss';

const TeamMembers = () => {


  return (
    <div className={classes.teamMembers}>
      <h1>Team members</h1>
      <Slider />
    </div>
  );
};

export default TeamMembers;
