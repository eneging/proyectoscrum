

function Card() {
 

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



  return (
    <>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8" >
  
    <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Materia</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    </>
  );
}

export default Card;
