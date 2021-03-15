import { combineReducers } from 'redux';
import workoutReducer from './workout.reducer';

export default combineReducers({ workouts: workoutReducer });
