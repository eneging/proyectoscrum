import  { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../config';

const Matriculas = () => {
  const [carreras, setCarreras] = useState([]);
  const [editCarrera, setEditCarrera] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/carreras`);
      setCarreras(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (carrera) => {
    setEditCarrera(carrera);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditCarrera(null);
    setModalOpen(false);
  };

  const handleDelete = async (carrera_id) => {
    try {
      await axios.delete(`${API_URL}/carreras/eliminar/matricula/estudiante/${carrera_id}`);
      fetchData();

    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };


  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/carreras/${editCarrera.carrera_id}`, {
        nombre: editCarrera.nombre,
      });
      fetchData();
      setEditCarrera(null);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className='flex justify-center flex-col p-[3rem]'>
      <h1 className='text-center text-3xl '>Selecciona la carrera donde quiere matricular a su estudiante</h1>
      <center><table className="divide-gray-200 m-[4rem] ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carreras</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">estudiantes Matriculados</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {carreras.map((carrera) => (
            <tr key={carrera.carrera_id}>
              <td className="px-6 py-4 whitespace-nowrap">{carrera.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEdit(carrera)}
                  className="px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                >
                  Mostrar Estudiantes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
      {/* Modal para la edición */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md w-[40vw]">
            <div className='flex justify-end'><button className='px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out'>Matricular un estudiante</button> </div>
            <h2 className="text-xl font-semibold mb-4">Carrera de {editCarrera?.nombre}</h2>
            {/* Aquí deberías mostrar la lista de estudiantes de la carrera seleccionada */}
            <ul className='flex flex-col gap-4'>
              {editCarrera?.estudiantes.map((estudiante) => (
                <li className='flex justify-between ' key={estudiante.id}>{estudiante.nombre}  <button
                onClick={() => handleDelete(estudiante.carrera_id)}
                className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
              >
                Delete
              </button></li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Cerrar Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matriculas;
