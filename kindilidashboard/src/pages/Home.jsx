// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the React Task Manager
      </h1>
      <p className="text-lg mb-6 max-w-xl">
        This is a simple React application where you can add, manage, and track
        your daily tasks. It includes features like task filtering, persistent
        storage, and a theme switcher for light and dark modes.
      </p>

      <div className="flex gap-4">
        <Link to="/tasks">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Go to Task Manager
          </button>
        </Link>

        <button
          className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          onClick={toggleTheme}
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}
