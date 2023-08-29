import React, { useState } from 'react';
import HabitItem from './HabitItem';

function HabitList({ habits, addHabit, renameHabit, deleteHabit }) {
  const [newHabitName, setNewHabitName] = useState('');

  // This function will add new habit in the habit list.
  const handleAddHabit = () => {
    if (newHabitName.trim() !== '') {
      addHabit(newHabitName);
      setNewHabitName('');
    }
  };

  return (
    <div className="HabitList">
      <div>
        {/* Taking input to add as new habit */}
        <input
          type="text"
          value={newHabitName}
          onChange={(e) => setNewHabitName(e.target.value)}
          placeholder="Enter new habit name"
        />
        {/* Button to add new habit */}
        <button className="AddButton" onClick={handleAddHabit}>
          + Add Habit
        </button>
      </div>
      <ul>
        {/* Map over the habit list and display them */}
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <HabitItem
              key={index}
              habit={habit}
              index={index}
              renameHabit={renameHabit}
              deleteHabit={deleteHabit}
            />
          ))
        ) : (
          // Initialy when no habit is added it show this message.
          <p>"Please Add New Habits To Track Them"</p>
        )}
      </ul>
    </div>
  );
}

export default HabitList;
