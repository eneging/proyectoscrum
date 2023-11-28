import  { useEffect, useState } from "react";

function Noticias() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkdwfPzpVRyKW3q2BttxlNbDFjxjzpK7pRs88hG4NwIaNg9y5slbv0wZ-xFTrFQnYtPQ&usqp=CAU",
    "https://i.ytimg.com/vi/lhW5ajbAuUw/maxresdefault.jpg",
    "https://i.blogs.es/fdabba/ilya-pavlov-oqtafyt5ktw-unsplash/500_333.jpeg ",
   
  ];

  const texto = [
    "Es una organización internacional sin fines de lucro dedicada al desarrollo y formación de nuevos técnicos, en áreas productivas de acuerdo con la demanda laboral.",
    "Buscar, entrenar, ayudar y elevar personas con necesidad de encontrar un empleo o mejorar el actual, para que alcancen un nivel laboral competitivo que les permita desarrollarse en una línea de carrera." ,
    "Trascender en la vida de los beneficiarios para que desarrollen sus talentos, alcancen su potencial y se conviertan en trabajadores útiles y exitosos en sus comunidades",
    
  ];

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  let transition;

function repetirCadaSegundo() {
 
  transition = setInterval(handleNext, 6000);
}


useEffect(() => {
repetirCadaSegundo();
}, []);

  return (
    <>
  

      <div
        id="contenedor"
        className=" text-white flex justify-center h-screen items-center  "
      >
         
        
        <div
          id="animation-carousel"
          className="relative  w-[40vw] h-[60vh]  "
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
                className="object-fill h-[60vh] "
                alt={`Carousel Image ${index + 1}`}
              />
            </div>
            
          ))}
         
        </div>
        {texto.map((text, index) => (
            <div
              key={index}
              className={`duration-200 ease-linear text-2xl ${
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
          className=" bg-slate-500 rounded-full absolute top-10% start-0 z-30 flex items-center justify-center h-11 px-4 cursor-pointer group focus:outline-none"
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
