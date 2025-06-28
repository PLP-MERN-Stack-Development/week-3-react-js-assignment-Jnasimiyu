// src/components/TaskManager.jsx
import { useState } from 'react';
import useLocalStorage from '../hooks/LocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  // Add New Task
  const addTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Task Completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true; // All
  });

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

      {/* Add Task */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-4">
        {['All', 'Active', 'Completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded ${
              filter === f ? 'bg-blue-600 text-white' : 'bg-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500">No tasks found.</p>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                className={`cursor-pointer ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
