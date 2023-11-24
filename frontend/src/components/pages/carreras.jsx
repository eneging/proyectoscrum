import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config";

const Carreras = () => {
  const [students, setStudents] = useState([]);
  const [editCarrera, setEditCarrera] = useState({
    carrera_id: null,
    nombre: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/carreras`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (carrera_id) => {
    try {
      await axios.delete(`${API_URL}/carreras/${carrera_id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (carrera) => {
    setEditCarrera({ carrera_id: carrera.carrera_id, nombre: carrera.nombre });
  };

  const handlOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/carreras/${editCarrera.carrera_id}`, {
        nombre: editCarrera.nombre,
      });

      fetchData();
      setEditCarrera({ carrera_id: null, nombre: "" });
    } catch (error) {
      console.error("Error updating student:", error);
    }

    if (handleEdit) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "se a editado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  {
    /* crear carreras */
  }

  const [newCarrera, setNewCarrera] = useState();

  const handleCreate = (e) => {
    setNewCarrera({ ...newCarrera, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    sendDataToServer({ newCarrera });
    handleCloseModal(false);
  };

  const sendDataToServer = async () => {
    try {
      await axios.post(`${API_URL}/carreras`, {
        nombre: newCarrera.nombre,
      });
      fetchData();
      setEditCarrera({ carrera_id: null, nombre: "" });
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="flex  flex-col h-screen  gap-3 ">
      <div className="bg-gray-800  text-white flex justify-around h-[12vh] w-screen items-center "></div>
      <div className="flex justify-end w-[90vw] m-[1rem]">
        <button
          onClick={() => handlOpenModal()}
          className="px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
        >
          Agregar Docente
        </button>{" "}
      </div>

      <div className=" flex justify-center">
        <table className="gap-[2rem] divide-gray-200 w-[70vw] ">
          <thead>
            <tr className="bg-gray-800 ">
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Nombre Carrera
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  divide-gray-200  ">
            {students.map((student) => (
              <tr
                key={student.carrera_id}
                className="flex items-center justify-between "
              >
                <td className="px-6 py-4 whitespace-nowrap ">
                  {" "}
                  <div className="flex gap-4 items-center">
                    <img src="https://picsum.photos/50"></img>
                    <div>{student.nombre}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(student)}
                    className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.carrera_id)}
                    className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal para la edición */}
      {editCarrera.carrera_id !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Edit Name:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editCarrera.nombre}
              onChange={(e) =>
                setEditCarrera({ ...editCarrera, nombre: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <button
              onClick={handleSaveEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-[40vw] h-[80vh] p-[3rem]">
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

export default Carreras;
