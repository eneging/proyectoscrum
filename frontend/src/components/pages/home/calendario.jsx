

function Calendario() {
  const noticias = [
    {
      fecha: "Febrero 2022",
      titulo: "Nuevas herramientas de desarrollo para programadores",
      imagen: "https://files.mormonsud.org/wp-content/uploads/2023/09/Funval-Quito-Peru.jpeg",
      descripcion: "Funval es una organización internacional con 22 años de experiencia que promueve la formación y capacitación laboral gratuita con el objetivo de ayudar a las personas a obtener un mejor empleo.",
    },
    {
      fecha: "Marzo 2022",
      titulo: "Avances en la enseñanza del inglés a través de la tecnología",
      imagen: "https://files.mormonsud.org/wp-content/uploads/2023/09/Funval-Bogota.jpeg",
      descripcion: "La integración de tecnologías modernas está revolucionando la enseñanza del inglés, haciendo el aprendizaje más accesible y efectivo.",
    },
    {
      fecha: "Abril 2022",
      titulo: "Desarrollo de habilidades lingüísticas en programadores",
      imagen: "https://i.ytimg.com/vi/aDComfZBa-U/maxresdefault.jpg",
      descripcion: "Cómo el conocimiento del inglés está cada vez más integrado en el perfil de habilidades esenciales para programadores y desarrolladores de software.",
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700  py-[10vh]  ">
      {noticias.map((noticia, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1  font-normal leading-none text-gray-400 dark:text-gray-500 text-2xl">
            {noticia.fecha}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{noticia.titulo}</h3>
       <div className="flex gap-[10%] justify-center">  {noticia.imagen && <img src={noticia.imagen} alt={`Imagen ${index + 1}`} className="mb-4 w-[40vw] rounded-lg" />}
          <p className="text-4xl font-normal text-gray-500 dark:text-gray-400 w-[35vw] px-7">{noticia.descripcion}</p></div> 
        </li>
      ))}
    </ol>
  );
}

export default Calendario;
