import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HabitItem({ habit, index, renameHabit, deleteHabit }) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(habit.name);

  // This handleRename Function will handle rename of habit name. 
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
          {/* Display habit name */}
          <span className="HabitName">{habit.name}</span>
          {/* Display number of days on which habit is completed successfully. */}
          <span className="DaysCompleted">Days Completed: {habit.daysCompleted.filter(day => day === 'Done').length}</span>
          {/* Link to go to the week view page. */}
          <Link to={`/week-view/${index}`} className="WeekViewButton">
            Week View
          </Link>
          {/* Button to edit the habit neme */}
          <button className="EditButton" onClick={() => setEditing(true)}>Edit</button>
          {/* Button to delete habit from the list */}
          <button className="DeleteButton" onClick={() => deleteHabit(index)}>Delete</button>
        </>
      ) : (
        <>
          {/* Taking input to change the habit name */}
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <div>
            {/* Save button to save the new changed name */}
            <button className="SaveButton" onClick={handleRename}>Save</button>
            {/* Cancle Button if we don't want to change the neme. */}
            <button className="CancelButton" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </>
      )}
    </li>
  );
}

export default HabitItem;
