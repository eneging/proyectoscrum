import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/routes/navigation';
import Home from './components/pages/home/home';
import Students from './components/pages/Registromatriculas/estudiantes/studends';
import Teachers from './components/pages/Registromatriculas/docentes/teachers';

import Editar from './components/pages/Registromatriculas/estudiantes/editar';
import { Login } from './components/pages/login/login';
import Matriculas2 from './components/pages/Registromatriculas/matriculas/matriculas';
import Principal from './components/pages/login/principal';

import axios from 'axios';

import Carreras from './components/pages/Registromatriculas/carreras/carreras';
import NavRegistro from './components/pages/Registromatriculas/NavRegistro';
import './App.css'
import Grupos from './components/pages/Registromatriculas/grupos/Grupos';
import Niveles from './components/pages/Registromatriculas/niveles/Niveles';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        setLoggedIn(true);
      }

      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const apiUrl = 'http://127.0.0.1:8000/api/login';

      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post(apiUrl, data);

      if (response.data.value) {
        localStorage.setItem('authToken', response.data.token);

        Swal.fire({
          title: 'Inicio de Sesión exitoso',
          text: 'Bienvenido al sistema de registro',
          icon: 'success',
        });

        setLoggedIn(true);
        setShowLogin(false);
      } else {
        Swal.fire({
          title: 'Inicio de Sesión Fallido',
          text: response.data.mensaje,
          icon: 'info',
        });
      }
    } catch (error) {
      console.error('Error al enviar datos a la API:', error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setLoggedIn(false);
    setShowLogin(true);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      {showLogin && !isLoggedIn ? (
        <Principal onLogin={() => setShowLogin(true)} />
      ) : (
        <Router>
          {isLoggedIn && <Navigation funLogout={handleLogout} />}
          <Routes>
            {isLoggedIn && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/carreras" element={<Carreras />} />
                <Route path="/matriculas" element={<Matriculas2 />} />
                <Route path="/editar" element={<Editar />} />
                <Route path="/registros" element={<NavRegistro/>} />
                <Route path="/grupos" element={<Grupos/>} />
                <Route path="/niveles" element={<Niveles/>} />
              </>
            )}

            {!isLoggedIn && (
              <Route
                path="/"
                element={
                  <Login
                    handleLogin={handleLogin}
                    onLogin={() => setShowLogin(false)}
                  />
                }
              />
            )}

            {!isLoggedIn && <Route path="/*" element={<Navigate to="/" />} />}
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
