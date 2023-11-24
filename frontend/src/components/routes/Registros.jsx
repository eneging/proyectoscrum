import { Link } from "react-router-dom";

function Registros() {
  return (
    <div className="bg-blue-500 h-[60vh] w-screen">

        <ul>

        <li>
          <Link to="/teachers"><h1 className="hover:text-orange-500">Registro Docentes</h1></Link>

        </li>

        <li>
          <Link to="/carreras"><h1 className="hover:text-orange-500">Registro Carreras</h1></Link>
        </li>

        <li>
          <Link to="/matriculas"><h1 className="hover:text-orange-500">Registro matriculas</h1></Link>
  </li>
        </ul>
    </div>
  )
}

export default Registros