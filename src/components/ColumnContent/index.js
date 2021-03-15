import { Draggable } from "react-beautiful-dnd";
import { SubTitleStyled } from "../Title/index.styled";
import {
  Container,
  Row,
  WorkoutContainer,
  MenuImage,
  AddImage,
  ImageWrapper,
} from "./index.styled";
import Exercises from "../Exercises";
import Title from "../Title";

// images
import MenuIcon from "../../assets/icons/menu.png";
import AddIcon from "../../assets/icons/add.png";
import { useState } from "react";
import NewExercise from "../Exercises/NewExercises";

const ColumnContent = ({ id, date, isToday, dayName, workouts }) => {
  const [currentId, setCurrentId] = useState("");

  const handleAddExercise = (id) => {
    setCurrentId(id);
  };

  return (
    <Container>
      <SubTitleStyled isActive={isToday}>{date}</SubTitleStyled>

      {workouts &&
        workouts.length > 0 &&
        workouts.map((workout, index) => (
          <Draggable draggableId={workout.name} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <WorkoutContainer key={workout.id}>
                  <Row>
                    <Title title={workout.name} isActive />

                    <MenuImage src={MenuIcon} alt="menu" />
                  </Row>

                  {workout.exercises.map((exercise) => (
                    <Exercises key={exercise.id} exercise={exercise} />
                  ))}

                  {currentId === workout.id ? (
                    <NewExercise
                      setCurrentId={setCurrentId}
                      workoutId={workout.id}
                      id={id}
                    />
                  ) : (
                    <ImageWrapper>
                      <AddImage
                        src={AddIcon}
                        alt="add"
                        onClick={() => handleAddExercise(workout.id)}
                      />
                    </ImageWrapper>
                  )}
                </WorkoutContainer>
              </div>
            )}
          </Draggable>
        ))}
    </Container>
  );
};

export default ColumnContent;
