import Title from '../Title';
import WorkoutItem from '../WorkoutItem';
import { Container } from './index.styled';

const Workout = ({ day, date, isToday }) => {
  return (
    <Container>
      <Title title={day} />

      <WorkoutItem date={date} isToday={isToday} />
    </Container>
  );
};

export default Workout;
