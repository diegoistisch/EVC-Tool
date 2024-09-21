import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuestionList from './components/QuestionList';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Seitenleiste */}
        <div className="w-64 bg-white shadow-md">
          <nav className="mt-10">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block py-2 px-4 text-gray-600 hover:bg-blue-500 hover:text-white ${isActive ? 'bg-blue-500 text-white' : ''}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/questions" 
              className={({ isActive }) => 
                `block py-2 px-4 text-gray-600 hover:bg-blue-500 hover:text-white ${isActive ? 'bg-blue-500 text-white' : ''}`
              }
            >
              Fragen und Antworten
            </NavLink>
            <NavLink 
              to="/quiz" 
              className={({ isActive }) => 
                `block py-2 px-4 text-gray-600 hover:bg-blue-500 hover:text-white ${isActive ? 'bg-blue-500 text-white' : ''}`
              }
            >
              Quiz
            </NavLink>
          </nav>
        </div>

        {/* Hauptinhalt */}
        <div className="flex-1 p-10 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<QuestionList />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
