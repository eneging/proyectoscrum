import  { useEffect, useState } from 'react';
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
// Resto de tus importaciones...

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function logout() {
    setLoggedIn(false);
  }
  
  const handleLogin = (email, password) => {

    /* if (email === 'admin@example.com' && password === 'password') {
      setLoggedIn(true);
    } */

    const enviarDatosAPI = async () => {
      try {
        const apiUrl = 'http://127.0.0.1:8000/api/login';
        
        const data = {
          email: email,
          password: password,
        };

        const response = await axios.post(apiUrl, data);

        //console.log('Respuesta de la API:', response.data.value);
        if (response.data.value) {

          Swal.fire({
            title: "Inicio de Sección exictoso",
            text: "Bienvenido al sistema de registro",
            icon: "success"
          });
        }else{

          Swal.fire({
            title: "Inicio de Sección Fallido",
            text: response.data.mensaje,
            icon: "info"
          });
        }

        setLoggedIn(response.data.value); //se cambia a true para iniciar seccion

      } catch (error) {
        
        console.error('Error al enviar datos a la API:', error.message);
      }
    };

    enviarDatosAPI();
  };


  return (
    <>
   

      <Router>
        <Navigation funLogout={logout} />

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
