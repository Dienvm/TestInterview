import {
  Container,
  Title,
  SubTitle,
  Row,
  InfoContent,
  Wrap,
} from "./index.styled";

const Exercises = ({ exercise }) => {
  const { name, info } = exercise;
  return (
    <Container>
      <Wrap>
        <Title>{name}</Title>
      </Wrap>

      <Row>
        <SubTitle>{info.length}x</SubTitle>
        <InfoContent>{info.join(" x ")}</InfoContent>
      </Row>
    </Container>
  );
};

export default Exercises;
