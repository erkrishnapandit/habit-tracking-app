import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HabitItem({ habit, index, renameHabit, deleteHabit }) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(habit.name);

  const handleRename = () => {
    if (newName.trim() !== '') {
      renameHabit(index, newName);
      setEditing(false);
    }
  };

  return (
    <li className="HabitItem">
      {!editing ? (
        <>
          <span className="HabitName">{habit.name}</span>
          <span className="DaysCompleted">Days Completed: {habit.daysCompleted.filter(day => day === 'Done').length}</span>
          <Link to={`/week-view/${index}`} className="WeekViewButton">
            Week View
          </Link>
          <button className="EditButton" onClick={() => setEditing(true)}>Edit</button>
          <button className="DeleteButton" onClick={() => deleteHabit(index)}>Delete</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <div>
            <button className="SaveButton" onClick={handleRename}>Save</button>
            <button className="CancelButton" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </>
      )}
    </li>
  );
}

export default HabitItem;
