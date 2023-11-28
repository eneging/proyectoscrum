import Card from "./cards"


function DatosCard () {

    const datosCarreras = [
        { carrera: 'Economía', descripcion: 'La carrera de Economía se enfoca en el estudio de la producción, distribución y consumo de bienes y servicios. Los economistas analizan patrones económicos, formulan políticas y ofrecen asesoramiento para abordar cuestiones relacionadas con el crecimiento económico, la inflación, el empleo y la toma de decisiones empresariales.' },
        { carrera: 'Ingeniería de Sistemas', descripcion: 'La Ingeniería de Sistemas combina principios de ingeniería y ciencias de la computación para diseñar, desarrollar e implementar sistemas de información eficientes. Los ingenieros de sistemas se centran en la integración de hardware, software y redes para crear soluciones tecnológicas que mejoren la eficiencia y la productividad.' },
        { carrera: 'Inglés', descripcion: 'La carrera de Inglés se centra en el estudio profundo del idioma inglés, abarcando literatura, lingüística, gramática y cultura. Los estudiantes desarrollan habilidades avanzadas en lectura, escritura, expresión oral y análisis crítico. Además, la carrera puede incluir la enseñanza del inglés como lengua extranjera.' },
        { carrera: 'Medicina', descripcion: 'La carrera de Medicina prepara a los estudiantes para convertirse en profesionales de la salud. Los estudiantes estudian anatomía, fisiología, farmacología y otros aspectos relacionados con la salud humana. Posteriormente, adquieren habilidades prácticas a través de la formación clínica para diagnosticar, tratar y prevenir enfermedades.' },
       
      ];
      

  return (
    <div className="flex justify-around  w-full px-5 ">
    {datosCarreras.map((item, index) => (
      <Card key={index} data={item} />
    ))}
  </div>
  
)}

export default DatosCard