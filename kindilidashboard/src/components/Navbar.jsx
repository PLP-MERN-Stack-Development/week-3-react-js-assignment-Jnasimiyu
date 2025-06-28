// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">My React App</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API Data</Link>
      </div>
    </nav>
  );
}

