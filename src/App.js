import './App.css';
import Column from './components/Column';
import { getDateOfWeek } from './utils/getDate';

function App() {
  const dateOfWeek = getDateOfWeek();

  return (
    <div className='container'>
      {dateOfWeek.map((item) => {
        const { dayName, date, isToday } = item;
        return (
          <Column key={dayName} day={dayName} date={date} isToday={isToday} />
        );
      })}
    </div>
  );
}

export default App;
