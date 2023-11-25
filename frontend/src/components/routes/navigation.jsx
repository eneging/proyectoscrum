import { Link } from "react-router-dom";


function Navigation(props) {

  return (<>
   
   <nav className="bg-white  text-black flex justify-between h-cover w-screen items-center fixed shadow-md z-40">
      <div className="flex  items-start  "><img  className="w-[13vw]" src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/logo/1696433166/logo%202023.png"></img>  
     </div>

      
      <ul className='flex justify-between w-[60%]  '>

        <li>

          <Link to="/"><h1 className="hover:text-orange-500">Home</h1></Link>

        </li>
        <li>

          <Link to="/students"><h1 className="hover:text-orange-500">Datos de  Estudiantes</h1></Link>
        </li>
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
<ul className=" px-10">
        <li onClick={props.funLogout}>
          <Link to="/">Logout</Link>
        </li>
        </ul>
    
    </nav>

</>



  );
}

export default Navigation;
