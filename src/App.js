import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HabitList from './HabitList';
import WeekView from './WeekView';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    setHabits(storedHabits);
  }, []);

  const addHabit = (habitName) => {
    const newHabit = { name: habitName, daysCompleted: new Array(7).fill('None') };
    const updatedHabits = [...habits, newHabit];
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const updateHabitDays = (index, updatedDays) => {
    const updatedHabits = [...habits];
    updatedHabits[index].daysCompleted = updatedDays;
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const renameHabit = (index, newName) => {
    const updatedHabits = [...habits];
    updatedHabits[index].name = newName;
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  return (
    <Router>
      <div className="App">
        <h1>Habit Tracker</h1>
        <Routes>
          <Route path="/" element={<HabitList habits={habits} addHabit={addHabit} renameHabit={renameHabit} deleteHabit={deleteHabit} />} />
          <Route path="/week-view/:index" element={<WeekView habits={habits} updateHabitDays={updateHabitDays} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
