import { Container, Title, SubTitle, Row, InfoContent } from './index.styled';

const Exercises = ({ exercise }) => {
  const { name, info } = exercise;
  return (
    <Container>
      <Title>{name}</Title>

      <Row>
        <SubTitle>{info.length}x</SubTitle>
        <InfoContent>{info.join(' x ')}</InfoContent>
      </Row>
    </Container>
  );
};

export default Exercises;
