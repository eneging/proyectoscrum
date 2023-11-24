
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import Teachers from "./teachers";
import Carreras from "./carreras";
import Matriculas2 from "./matriculas";
import Editar from "./editar";
import Registros from '../routes/Registros';

function NavRegistro() {
  return (
  <Router>
 
 <Registros></Registros>
<Switch>

    <Route path="/teachers" element={<Teachers/>} />
                <Route path="/carreras" element={<Carreras />} />
                <Route path="/matriculas" element={<Matriculas2/>} />
                <Route path="/editar" element={<Editar/>} />
    

    </Switch>
  </Router>



  )
}

export default NavRegistro