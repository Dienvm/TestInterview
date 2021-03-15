import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Column from './components/Column';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(({ workouts }) => workouts.data);

  useEffect(() => {
    dispatch({ type: 'MAPPING_WORKOUTS_DATA' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      {data.length > 0 &&
        data.map((item) => {
          const { id, dayName, date, isToday, workouts } = item;
          return (
            <Column
              key={id}
              id={id}
              day={dayName}
              date={date}
              isToday={isToday}
              workouts={workouts}
            />
          );
        })}
    </div>
  );
}

export default App;
