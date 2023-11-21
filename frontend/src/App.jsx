
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';

import Teachers from './components/pages/teachers';
import Navigation from './components/routes/navigation';

import Students from './components/pages/studends';
import Carreras from './components/pages/carreras';

function App() {


  return (
    <>
    
    <Router>
      <Navigation></Navigation>
    
    <Routes>
   <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/carreras" element={<Carreras />} />
    </Routes>
  </Router>


    </>
  )
}

export default App
