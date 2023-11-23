
import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config";

const Teachers = () => {
  const [teacher, setTeachers] = useState([]);
  const [editTeacher, setEditTeacher] = useState({
    docente_id: null,
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    correo: "",
    telefono: "",
  });
  const [storeTeacher, setStoreTeacher] = useState({
    docente_id: null,
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    correo: "",
    telefono: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/docentes`);
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (docente_id) => {
    try {
      await axios.delete(`${API_URL}/docentes/${docente_id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleEdit = (teacher) => {
    setEditTeacher({
      docente_id: teacher.docente_id,
      nombre: teacher.nombre,
      apellido: teacher.apellido,
      dni: teacher.dni,
      direccion: teacher.direccion,
      correo: teacher.correo,
      telefono: teacher.telefono,
    });
  };

  const handlOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/docentes/${editTeacher.docente_id}`, {
        nombre: editTeacher.nombre,
        apellido: editTeacher.apellido,
        dni: editTeacher.dni,
        direccion: editTeacher.direccion,
        correo: editTeacher.correo,
        telefono: editTeacher.telefono,
      });
      fetchData();
      setEditTeacher({
        docente_id: null,
        nombre: "",
        apellido: "",
        dni: "",
        direccion: "",
        correo: "",
        telefono: "",
      });
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };

  const handleStore = async () => {
    try {
      await axios.post(`${API_URL}/docentes`, {

        nombre: storeTeacher.nombre,
        apellido: storeTeacher.apellido,
        dni: storeTeacher.dni,
        direccion: storeTeacher.direccion,
        correo: storeTeacher.correo,
        telefono: storeTeacher.telefono
,      });
      fetchData();
      setStoreTeacher({
        docente_id: null,
        nombre: "",
        apellido: "",
        dni: "",
        direccion: "",
        correo: "",
        telefono: "",
      });
      setModalOpen(false); // Cerrar modal después de guardar
    } catch (error) {
      console.error("Error save teacher:", error);
    }
  };

  return (
    <div className="flex  flex-col h-screen  gap-3 ">
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
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuario{" "}
              </th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                dni
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                telefono{" "}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  divide-gray-200">
          {teacher.map((teacher) => (
            <tr key={teacher.docente_id}>
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
                      {`${teacher.nombre} ${teacher.apellido}`}
                    </div>
                    <div className="text-sm text-gray-500">
                      {`${teacher.correo}`}
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="text-sm text-gray-500">
                      {`${teacher.dni}`}
                    </div>
              </td>
             
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {`${teacher.telefono}`}
              </td>
              <button
                  onClick={() => handleEdit(teacher)}
                  className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(teacher.docente_id)}
                  className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                >
                  Delete
                </button>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {/* Modal para la edición */}
      {editTeacher.docente_id !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            Name:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.nombre}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, nombre: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            Last Name:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.apellido}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, apellido: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            E-Mail:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.correo}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, correo: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            DNI:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.dni}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, dni: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            Phone:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.telefono}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, telefono: e.target.value })
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
      {storeTeacher &&(
        




        
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            Name:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.nombre}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, nombre: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            Last Name:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.apellido}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, apellido: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            E-Mail:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.correo}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, correo: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            DNI:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.dni}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, dni: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
             <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
            Phone:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editTeacher.telefono}
              onChange={(e) =>
                setEditTeacher({ ...editTeacher, telefono: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <button
              onClick={handleStore}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Save
            </button>
           <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Cerrar Modal
            </button>
          </div>
        </div>
          
        </div>
      )}
    </div>
  );
};


export default Teachers 