import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./components/pages/login";
import Home from "./components/pages/home";

import Teachers from "./components/pages/teachers";
import Navigation from "./components/routes/navigation";

import Students from "./components/pages/studends";
import Carreras from "./components/pages/carreras";

import Editar from "./components/pages/editar";

import Matriculas from './components/pages/matriculas';


function App() {
  return (
    <>

    
 <Router>
  
 </Router>
    
    <Router>

      <Navigation></Navigation>
    
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/carreras" element={<Carreras />} />
      <Route path="/matriculas" element={<Matriculas/> }/>
      <Route path="/editar" element={<Editar />} />
</Routes>
  </Router>


    </>
  );
}

export default App;
