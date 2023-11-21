import { Link } from 'react-router-dom';

function Navigation() {
  return (
<nav className='bg-gray-800  text-white flex justify-around h-[10vh] w-screen items-center ' >
      <div>#mi app matriculas</div>
      
      <ul className='flex justify-around w-[40%]'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teachers">studiantes</Link>
        </li>
        <li>
          <Link to="/students">docentes</Link>
        </li>

        <li>
          <Link to="/carreras">carreras</Link>
        </li>
      </ul>




      
    </nav>

    


  );
  
}

export default Navigation;