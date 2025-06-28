// src/pages/Tasks.jsx
import TaskManager from '../components/TaskManager';
import { useTheme } from '../context/ThemeContext';

export default function Tasks() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={toggleTheme}
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <TaskManager />
    </div>
  );
}
