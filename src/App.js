import './App.css';
import Workout from './components/Workout';
import { getDateOfWeek } from './utils/getDate';

function App() {
  const dateOfWeek = getDateOfWeek();

  return (
    <div className='container'>
      {dateOfWeek.map((item) => {
        const { dayName, date, isToday } = item;
        return (
          <Workout key={dayName} day={dayName} date={date} isToday={isToday} />
        );
      })}
    </div>
  );
}

export default App;
