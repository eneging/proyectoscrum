import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/routes/navigation';
import Home from './components/pages/home';
import Students from './components/pages/studends';
import Teachers from './components/pages/teachers';
import Carreras from './components/pages/carreras';
import Editar from './components/pages/editar';
import { Login } from './components/pages/login';
import Matriculas2 from './components/pages/matriculas';

import axios from 'axios';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      // Lógica para verificar si el usuario ya está autenticado
      // Puedes usar cookies, tokens, etc.
      // Aquí un ejemplo sencillo utilizando localStorage
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
        // Guardar token o información de autenticación en localStorage
        localStorage.setItem('authToken', response.data.token);

        Swal.fire({
          title: 'Inicio de Sesión exitoso',
          text: 'Bienvenido al sistema de registro',
          icon: 'success',
        });

        setLoggedIn(true);
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
    // Limpiar token o información de autenticación de localStorage
    localStorage.removeItem('authToken');
    setLoggedIn(false);
  };

  if (isLoading) {
    // Muestra un componente de carga mientras se verifica el estado de autenticación
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      {isLoggedIn && <Navigation funLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login handleLogin={handleLogin} />}
        />
        {isLoggedIn && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/matriculas" element={<Matriculas2 />} />
            <Route path="/editar" element={<Editar />} />
          </>
        )}
        {!isLoggedIn && <Route path="/*" element={<Navigate to="/" />} />}
      </Routes>
    </Router>
  );
}

export default App;