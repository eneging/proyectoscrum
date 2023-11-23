import { Link } from "react-router-dom";

function Navigation(props) {

  return (
    <nav className="bg-gray-800  text-white flex justify-around h-[12vh] w-screen items-center fixed shadow-md ">
      <div className="flex gap-4 items-center bg-orange-500 p-1 "><img  className="w-[3vw]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G3iW4Ur14DPKXx427YVLoMAv83QjhgOIgZdzNO7Tm5M6meiVyRg3sMQlsHT35rptSIE&usqp=CAU"></img>  
      <h1 className="flex justify-center items-center font-serif">Universidad <br></br>del  Atlantico</h1></div>

      
      <ul className='flex justify-around w-[60%]'>

     
        

        <li>

          <Link to="/home"><h1 className="hover:text-orange-500">Home</h1></Link>

        </li>
        <li>

  

          <Link to="/students"><h1 className="hover:text-orange-500">Registro Estudiantes</h1></Link>
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
        
        <li onClick={props.funLogout}>
          <Link to="/">Logout</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navigation;
