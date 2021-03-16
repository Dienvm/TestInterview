import { Droppable } from "react-beautiful-dnd";
import Title from "../Title";
import ColumnContent from "../ColumnContent";
import { Container, Wrap } from "./index.styled";

const Column = ({ col: { id, dayName, date, isToday, workouts } }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title title={id} />

          <Wrap {...provided.droppableProps} ref={provided.innerRef}>
            <ColumnContent
              id={id}
              dayName={dayName}
              date={date}
              isToday={isToday}
              workouts={workouts}
            />
            {provided.placeholder}
          </Wrap>
        </Container>
      )}
    </Droppable>
  );
};

export default Column;
