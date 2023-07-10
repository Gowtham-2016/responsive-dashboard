import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Protected from './components/Protected';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
