import Title from '../Title';
import ColumnContent from '../ColumnContent';
import { Container } from './index.styled';

const Column = ({ day, date, isToday }) => {
  return (
    <Container>
      <Title title={day} />

      <ColumnContent day={day} date={date} isToday={isToday} />
    </Container>
  );
};

export default Column;
