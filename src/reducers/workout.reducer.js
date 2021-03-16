import { MAPPING_WORKOUTS_DATA, ADD_NEW_EXERCISE } from "../actions";
import { WORKOUTS } from "../constants/stub-data";
import { getDateOfWeek } from "../utils/getDate";
import { generateGUID } from "../utils/helpers";

const initialState = {
  data: [],
  currentExercise: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case MAPPING_WORKOUTS_DATA: {
      const dateOfWeek = getDateOfWeek();
      const result = {};

      for (let index = 0; index < Object.keys(WORKOUTS).length; index++) {
        const element = Object.keys(WORKOUTS)[index];
        const newData = { ...WORKOUTS[element], ...dateOfWeek[element] };
        result[element] = newData;
      }

      return {
        ...state,
        data: result,
      };
    }
    case ADD_NEW_EXERCISE: {
      const { fields, id, workoutId } = action.payload;
      const currentWorkout = state.data[id].workouts;

      for (let index = 0; index < currentWorkout.length; index++) {
        const workout = currentWorkout[index];
        if (workout.id === workoutId)
          workout.exercises.push({
            id: generateGUID(),
            name: fields.name,
            info: [fields.info],
          });
      }

      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
