import Title from '../Title';
import { WorkoutContainer } from './index.styled';

const WorkoutItem = ({ date, isToday }) => {
  return (
    <WorkoutContainer>
      <Title title={date} isToday={isToday} />
    </WorkoutContainer>
  );
};

export default WorkoutItem;
