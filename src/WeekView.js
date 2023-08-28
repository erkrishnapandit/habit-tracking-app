import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function WeekView({ habits, updateHabitDays }) {
  const { index } = useParams();
  const habit = habits[index];

  const [daysCompleted, setDaysCompleted] = useState([...habit.daysCompleted]);

  const handleDayChange = (dayIndex, newStatus) => {
    const updatedDays = [...daysCompleted];
    updatedDays[dayIndex] = newStatus;
    setDaysCompleted(updatedDays);
  };

  const handleSave = () => {
    updateHabitDays(index, daysCompleted);
  };

  return (
    <div className="WeekView">
      <h2>Week View - {habit.name}</h2>
      <ul>
        {daysCompleted.map((status, dayIndex) => (
          <li key={dayIndex}>
            <h4>{`Day ${dayIndex + 1}`}</h4>
            <label>
              <input type="radio" name={`status-${dayIndex}`} value="Done" checked={status === 'Done'} onChange={() => handleDayChange(dayIndex, 'Done')} />
              Done
            </label>
            <label>
              <input type="radio" name={`status-${dayIndex}`} value="Not done" checked={status === 'Not done'} onChange={() => handleDayChange(dayIndex, 'Not done')} />
              Not Done
            </label>
            <label>
              <input type="radio" name={`status-${dayIndex}`} value="None" checked={status === 'None'} onChange={() => handleDayChange(dayIndex, 'None')} />
              None
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSave}>Save</button>
      <Link to="/" className="BackButton">Back</Link>
    </div>
  );
}

export default WeekView;
