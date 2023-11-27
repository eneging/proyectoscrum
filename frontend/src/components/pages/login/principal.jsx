

import  { useState, useEffect } from 'react';


import image1 from '../img/programador1.jpg'
import image2 from '../img/programador2.jpg'
import image3 from '../img/ingles.jpg'
import image4 from '../img/ingles2.jpg'
import Footer from '../home/footer'





function Principal({ onLogin }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
      }, 7000);
  

      return () => clearInterval(intervalId);
    }, []); 


    const handleLoginClick = () => {
        // Lógica para mostrar el componente Login o realizar otras acciones
        onLogin();
        
       console.log('hola mundo');
        // Puedes realizar operaciones adicionales antes de mostrar el Login si es necesario
      
      };
    
  return (
    <>
      <nav className="  bg-white shadow-md w-full flex items-center justify-between px-20 fixed z-40 ">
        <a className="navbar-brand hidden md:flex items-center m-0 mr-4 p-0 aabtn">
          <img
            className="h-[10vh]"
            src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/logo/1696433166/logo%202023.png"
            alt="Funval Internacional"
          />
        </a>

        <>
      {/* ... Resto del código del componente Principal ... */}
      <button onClick={handleLoginClick}  className='text-blue-700 text-[18px] ' >Acceder</button>
    </>
      </nav>

      <div className="bg-gray-200 h-cover flex justify-center py-[17rem] ">
        <div className="h-[80vh] w-[82vw] rounded-[0.5rem] flex justify-center">
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`${
            index === currentSlide ? 'block' : 'hidden'
          } duration-700 ease-in-out`}
          data-carousel-item
        >
          <img 
            src={index === 0 ? image1 : index === 1 ? image2 : index === 2 ? image3 : image4}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-[1rem] z-30"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
          </div>
        </div>
      </div>

<Footer></Footer>

    </>
  );
}

export default Principal;