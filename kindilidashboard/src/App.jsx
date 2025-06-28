// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import ApiPage from './pages/ApiPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Layout>
  );
}
