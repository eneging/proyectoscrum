

import  { useState, useEffect } from 'react';


import image1 from '../img/programador1.jpg'
import image2 from '../img/programador2.jpg'
import image3 from '../img/ingles.jpg'
import image4 from '../img/ingles2.jpg'


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
     
      <div className=" bg-[#292828] flex p-2 ml-auto mr-auto justify-center items-center text-white">
        <div className="flex-1">
          <h3>Contactanos</h3>

          <div className="flex">
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src=""
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src=""
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src=""
                alt=""
              />
            </div>
          </div>
          <h3 className="mt-2 ">Siganos</h3>
          <div className="flex">
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src=""
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src=""
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <p>Contactar con el soporte del sitio</p>
          </div>
          <p>Usted se ha identificado como usuario</p>
          <a href="#">Cerrar Sesion</a>
          <a href="#">Resumen de retencion de datos</a>
          <br />
          <a href="#">Descargar la app para dispositivos moviles</a>
        </div>
        <div className="flex-1">
          <p>Descarga r la app para dispositivos moviles</p>
        </div>
      </div>
      <footer className="h-[10vh] bg-orange-500  ">
        <div className="flex justify-around text-white ">
          <div className="flex gap-2">
            <div>(056) 284399</div>
            <div> LUN-VIE 8:00 a 15:30</div>
            <div> mesadepartes@unica.edu.pe</div>
          </div>

          <div className="flex gap-2">
            <div>Bolsa de Trabajo</div>|<div>Correos</div>|<div>Soporte</div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Principal;