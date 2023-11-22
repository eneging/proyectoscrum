import axios from "axios";
import API_URL from "../../config";
import { useEffect, useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Obtener la lista de estudiantes al cargar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const response = await axios.get(`${API_URL}/docentes`);
      

      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/docentes/${id}`);
      // Actualizar la lista de estudiantes después de la eliminación
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center" >
        <div  className="bg-gray-800  text-white flex justify-around h-[12vh] w-screen items-center "></div>
  <div className='flex justify-between p-[1rem] w-[85vw]  '>
        <h1 className='text-center text-xl  p-[0.5rem]'>Lista de estudiantes</h1>
        <button className="bg-blue-500 text-white rounded-[5px] p-[0.5rem]">Crear Estudiante</button>
      </div>
      {/* <ul>
        {students.map((student) => (
          <li key={student.docente_id}>
            {`${student.nombre} ${student.apellido}`}
            <button onClick={() => handleDelete(student.docente_id)}>
              Delete
            </button>
          </li>
        ))}
      </ul> */}

    <center>  <table className=" divide-gray-200 w-[86vw]">
        <thead className="bg-gray-50">
          <tr className="bg-gray-800 ">
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-500 uppercase tracking-wider"
            >
              Nombre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-500  uppercase tracking-wider"
            >
              Rol
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-500  uppercase tracking-wider"
            >
              Estado
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-500  uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-500  uppercase tracking-wider"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          
          {/* PRUEBA */}

          {students.map((student) => (
            <tr key={student.docente_id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {`${student.nombre} ${student.apellido}`}
                    </div>
                    <div className="text-sm text-gray-500">
                      {`${student.correo}`}
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Estudiante
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {`${student.correo}`}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a
                  href="/editar"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Editar
                </a>
                <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                  Eliminar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table></center>
    </div>
  );
};

export default Students;
