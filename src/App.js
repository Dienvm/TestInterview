import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

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
    // debugger;
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
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
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

      // Make a new end list array
      const newEndWorkouts = end.workouts;

      // Insert the item into the end list
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
      <div className="container">
        {Object.keys(columns).length > 0 &&
          Object.keys(columns).map((col) => {
            return <Column col={columns[col]} key={columns[col].id} />;
          })}
      </div>
    </DragDropContext>
  );
}

export default App;
