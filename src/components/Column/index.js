import Title from '../Title';
import ColumnContent from '../ColumnContent';
import { Container } from './index.styled';

const Column = ({ id, dayName, date, isToday, workouts }) => {
  return (
    <Container>
      <Title title={id} />

      <ColumnContent
        id={id}
        dayName={dayName}
        date={date}
        isToday={isToday}
        workouts={workouts}
      />
    </Container>
  );
};

export default Column;
