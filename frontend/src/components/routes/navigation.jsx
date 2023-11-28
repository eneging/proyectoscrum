import { Link } from "react-router-dom";


function Navigation({funLogout}) {

  return (<>
   
   <nav className="bg-white  text-black flex justify-start h-cover min-h-[10vh] w-screen gap-[2vw] items-center fixed shadow-md z-40">
      <div className="flex  items-start  "><img  className="w-[13vw]" src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/logo/1696433166/logo%202023.png"></img>  
     </div>

<div >
      
      <ul className='flex justify-between w-full gap-[2vw]   '>

        <li>

          <Link to="/"><h1 className="hover:text-orange-500 text-[100%] text-gray-600">Home</h1></Link>

        </li>
       
       

        <li>
          <Link to="/matriculas"><h1 className="hover:text-orange-500 text-[100%] text-gray-600">Registros</h1></Link>
        </li>
      
        </ul>

        </div>

        <div className=" w-[57%] ">

<ul className="flex justify-end" >
        <li  onClick={funLogout} >
          <Link  className=" flex justify-end" to="/">  <svg className="flex-shrink-0 w-7 h-7  text-gray-500 transition duration-75 dark:text-blue-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
             </svg>
             <span className="flex-1 ms-3 whitespace-nowrap text-gray-800 hover:text-white"></span></Link>
        </li>
        </ul>
        </div>
    </nav>

</>



  );
}

export default Navigation;
