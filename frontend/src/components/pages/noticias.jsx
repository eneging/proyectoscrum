import React, { useState } from "react";

function Noticias() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://i.blogs.es/024749/chatdev2/500_333.jpeg",
    "https://i.blogs.es/af398b/copilot-ghostwriter/500_333.jpeg",
    "https://i.blogs.es/fdabba/ilya-pavlov-oqtafyt5ktw-unsplash/500_333.jpeg ",
   
  ];

  const texto = [
    "Alguien montó una empresa donde todos los cargos eran una IA. Creó su primer software en siete minutos y por un euro ROBÓTICA E IA     En la empresa varios bots se comunicaron entre ellos como lo harían los trabajadores de una empresa real.",
    "GitHub Copilot tiene más competencia: Meta acaba de presentar Code Llama, un nuevo aliado para los programadores " ,
    "No necesitamos más software que haga cada vez más. Necesitamos que mejoren lo que ya hacen APLICACIONES Pensando en el software como en el hardware",
    
  ];

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
<h1 class="bg-black mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Principale Noticias</h1>

      <div
        id="contenedor"
        className=" text-white flex justify-center h-screen items-center "
      >
         
        
        <div
          id="animation-carousel"
          className="relative w-80 h-80 overflow-hidden "
          data-carousel="static"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`duration-200 ease-linear ${
                index === activeIndex ? "" : "hidden"
              }`}
              data-carousel-item={index === activeIndex ? "active" : ""}
            >
              <img
                src={image}
                className=" block w-auto h-80 "
                alt={`Carousel Image ${index + 1}`}
              />
            </div>
            
          ))}
         
        </div>
        {texto.map((text, index) => (
            <div
              key={index}
              className={`duration-200 ease-linear  ${
                index === activeIndex ? "" : "hidden"
              }`}
              data-carousel-item={index === activeIndex ? "active" : ""}
            >



              
              <p
                
                className=" block w-80 p-5 h-80 "
                alt={`Carousel Image ${index + 1}`}
              >
                {text}
              </p>
            </div>
          ))}
        <button
          type="button"
          className="bg-slate-500 rounded-full absolute top-10% start-0 z-30 flex items-center justify-center h-11 px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          {"<"}
        </button>

        <button
          type="button"
          className="bg-slate-500 rounded-full absolute top-10% end-0 z-30 flex items-center justify-center h-11 px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Noticias;
