import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-gray-800  text-white flex justify-around h-[10vh] w-screen items-center ">
      <div>#mi app matriculas</div>

      
      <ul className='flex justify-around w-[60%]'>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>

  

          <Link to="/students">Registro Estudiantes</Link>
        </li>
        <li>
          <Link to="/teachers">Registro Docentes</Link>

        </li>

        <li>
          <Link to="/carreras">Registro Carreras</Link>
        </li>

        <li>
          <Link to="/matriculas">Registro matriculas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
