import { useEffect, useState } from 'react';
import { WORKOUTS } from '../../constants/stub-data';
import { SubTitleStyled } from '../Title/index.styled';
import {
  Container,
  Row,
  WorkoutContainer,
  MenuImage,
  AddImage,
  ImageWrapper,
} from './index.styled';
import Exercises from '../Exercises';
import Title from '../Title';

// images
import MenuIcon from '../../assets/icons/menu.png';
import AddIcon from '../../assets/icons/add.png';

const ColumnContent = ({ date, isToday, day }) => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const data = WORKOUTS.find((item) => item.id === day);
    !!data && setWorkouts(data.workouts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddExercise = () => {
    // TODO:
  };

  return (
    <Container>
      <SubTitleStyled isActive={isToday}>{date}</SubTitleStyled>

      {workouts &&
        workouts.length > 0 &&
        workouts.map((workout) => (
          <WorkoutContainer key={workout.id}>
            <Row>
              <Title title={workout.name} isActive />

              <MenuImage src={MenuIcon} alt='menu' />
            </Row>

            {workout.exercises.map((exercise) => (
              <Exercises id={exercise.id} exercise={exercise} />
            ))}

            <ImageWrapper>
              <AddImage src={AddIcon} alt='add' onClick={handleAddExercise} />
            </ImageWrapper>
          </WorkoutContainer>
        ))}
    </Container>
  );
};

export default ColumnContent;
