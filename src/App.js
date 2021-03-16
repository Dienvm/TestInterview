import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { AppContainer } from "./themes/styled";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(({ workouts }) => workouts.data);
  const [columns, setColumns] = useState({});

  useEffect(() => {
    dispatch({ type: "MAPPING_WORKOUTS_DATA" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setColumns(data);
  }, [data]);

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // If the source and destination columns are the same
    // AND if the index is the same, the item isn't moving
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the workouts
      // Start by making a new workouts without the dragged item
      const newWorkouts = start.workouts.filter(
        (_, idx) => idx !== source.index
      );

      // Then insert the item at the right location
      newWorkouts.splice(destination.index, 0, start.workouts[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        ...start,
        workouts: newWorkouts,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start workouts like before
      const newStartWorkouts = start.workouts.filter(
        (_, idx) => idx !== source.index
      );

      // Create a new start column
      const newStartCol = {
        ...start,
        workouts: newStartWorkouts,
      };

      // Make a new end workouts array
      const newEndWorkouts = end.workouts;

      // Insert the item into the end workouts
      newEndWorkouts.splice(destination.index, 0, start.workouts[source.index]);

      // Create a new end column
      const newEndCol = {
        ...end,
        workouts: newEndWorkouts,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppContainer>
        {Object.keys(columns).length > 0 &&
          Object.keys(columns).map((col) => {
            return <Column col={columns[col]} key={columns[col].id} />;
          })}
      </AppContainer>
    </DragDropContext>
  );
}

export default App;
