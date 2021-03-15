const getMonday = (date) => {
  date = new Date(date);
  var day = date.getDay(),
    diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

/**
 * Representation to get list date and day name in this current week
 * @returns array - week
 */
export const getDateOfWeek = () => {
  let curr = getMonday(new Date());
  let week = {};
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  const yyyy = currentDate.getFullYear();

  currentDate = yyyy + "-" + mm + "-" + dd;

  for (let i = 1; i <= 7; i++) {
    let date = curr.getDate() - curr.getDay() + i;

    let day = new Date(curr.setDate(date)).toISOString().slice(0, 10);
    const d = new Date(day);
    const dayName = days[d.getDay()].slice(0, 3).toLowerCase();

    const result = { date, dayName, isToday: currentDate === day };

    week[`${dayName.toLowerCase()}`] = result;
  }

  return week;
};
