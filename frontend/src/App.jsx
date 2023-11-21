import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/routes/navigation';
import Home from './components/pages/home';
import Students from './components/pages/studends';
import Teachers from './components/pages/teachers';
import Carreras from './components/pages/carreras';
import Editar from './components/pages/editar';
import { Login } from './components/pages/login';
import Matriculas2 from './components/pages/matriculas';

// Resto de tus importaciones...

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  
  const handleLogin = (email, password) => {
   
    setLoggedIn(true);

    if (email === 'admin@example.com' && password === 'password') {
      setLoggedIn(true);
    }
  };

  return (
    <>
   

      <Router>
        <Navigation isLoggedIn={isLoggedIn} />

        <Routes>
          <Route
            path="/"
            element={<Login handleLogin={handleLogin} />}
          />
          {isLoggedIn ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/students" element={<Students/>} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/carreras" element={<Carreras />} />
              <Route path="/matriculas" element={<Matriculas2 />} />
              <Route path="/editar" element={< Editar/>} />
            </>
          ) : (
        
            <Route
              path="/*"
              element={<Navigate to="/" />}
            />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
