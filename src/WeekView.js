import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function WeekView({ habits, updateHabitDays }) {
  const { index } = useParams();
  const habit = habits[index];

  const [daysCompleted, setDaysCompleted] = useState([...habit.daysCompleted]);

  // This function will handle the day change when we complete habit task.
  const handleDayChange = (dayIndex, newStatus) => {
    const updatedDays = [...daysCompleted];
    updatedDays[dayIndex] = newStatus;
    setDaysCompleted(updatedDays);
  };

  // This will save tha updated response.
  const handleSave = () => {
    updateHabitDays(index, daysCompleted);
    alert("Your Response Save Successfully")
  };

  return (
    <div className="WeekView">
      {/* Title Name along with habit name */}
      <h2>Week View - {habit.name}</h2>
      <ul>
        {daysCompleted.map((status, dayIndex) => (
          <li key={dayIndex}>
            <h4>{`Day ${dayIndex + 1}`}</h4>
            {/* Radio button to take response as input */}
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
      {/* Button to save the new updated response */}
      <button className='taskSave' onClick={handleSave}>Save</button>
      {/* Link to go back to landing page */}
      <Link to="/" className="BackButton">Back</Link>
    </div>
  );
}

export default WeekView;
