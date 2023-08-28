import React, { useState } from 'react';
import HabitItem from './HabitItem';

function HabitList({ habits, addHabit, renameHabit, deleteHabit }) {
  const [newHabitName, setNewHabitName] = useState('');

  const handleAddHabit = () => {
    if (newHabitName.trim() !== '') {
      addHabit(newHabitName);
      setNewHabitName('');
    }
  };

  return (
    <div className="HabitList">
      <div>
        <input
          type="text"
          value={newHabitName}
          onChange={(e) => setNewHabitName(e.target.value)}
          placeholder="Enter new habit name"
        />
        <button className="AddButton" onClick={handleAddHabit}>
          + Add Habit
        </button>
      </div>
      <ul>
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
          <p>"Please Add New Habits To Track Them".</p>
        )}
      </ul>
    </div>
  );
}

export default HabitList;
