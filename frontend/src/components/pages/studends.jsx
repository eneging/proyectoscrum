import axios from "axios";
import API_URL from "../../config";
import { useEffect, useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editStudents, setEditStudents] = useState({
    estudiante_id: null,
    nombre: "",
    apellido: "",
    correo: "",
  });

  const [addStudent, setAddStudent] = useState({
    estudiante_id: null,
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    correo: "",
    telefono: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Obtener la lista de estudiantes al cargar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/estudiante`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (estudiante_id) => {
    try {
      await axios.delete(`${API_URL}/estudiante/${estudiante_id}`);
      // Actualizar la lista de estudiantes después de la eliminación
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (estudiante) => {
    setEditStudents({
      estudiante_id: estudiante.estudiante_id,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      correo: estudiante.correo,
    });
  };

  // const stateAdd = (estudiante) => {
  //   setAddStudent({
  //     estudiante_id: estudiante.estudiante_id,
  //     nombre: estudiante.nombre,
  //     apellido: estudiante.apellido,
  //     correo: estudiante.correo,
  //   });
  // };

  const handleAddStudent = async () => {
    try {
      await axios.post(`${API_URL}/estudiante/`, {
        nombre: addStudent.nombre,
        apellido: addStudent.apellido,
        dni: addStudent.dni,
        direccion: addStudent.direccion,
        correo: addStudent.correo,
        telefono: addStudent.telefono,
      });
    } catch (error) {
      console.error("Error adding student:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const handleSaveEdit = async () => {
    try {
      console.log("Student ID to update:", editStudents.estudiante_id);
      console.log("Updated Name:", editStudents.nombre);

      await axios.put(`${API_URL}/estudiante/${editStudents.estudiante_id}`, {
        nombre: editStudents.nombre,
        apellido: editStudents.apellido,
        correo: editStudents.correo,
      });
      fetchData();
      setEditStudents({
        estudiante_id: null,
        nombre: "",
        apellido: "",
        correo: "",
      });
    } catch (error) {
      console.error("Error updating student:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const handlOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEmpty = () => {
    setEditStudents({
      estudiante_id: null,
      nombre: "",
      apellido: "",
      correo: "",
    });
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="bg-gray-800  text-white flex justify-around h-[12vh] w-screen items-center "></div>
      <div className="flex justify-between p-[1rem] w-[85vw]  ">
        <h1 className="text-center text-xl  p-[0.5rem]">
          Lista de estudiantes
        </h1>
        <button
          onClick={handlOpenModal}
          className="bg-blue-500 text-white rounded-[5px] p-[0.5rem]"
        >
          Crear Estudiante
        </button>
      </div>

      <center>
        {" "}
        <table className=" divide-gray-200 w-[86vw]">
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
              <tr key={student.estudiante_id}>
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
                    onClick={() => handleEdit(student)}
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Editar
                  </a>
                  <a
                    onClick={() => handleDelete(student.estudiante_id)}
                    href="#"
                    className="ml-2 text-red-600 hover:text-red-900"
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>

      {/* Modal para la edición */}
      {editStudents.estudiante_id !== null && (
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
              value={editStudents.nombre}
              onChange={(e) =>
                setEditStudents({ ...editStudents, nombre: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Edit Last Name:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editStudents.apellido}
              onChange={(e) =>
                setEditStudents({ ...editStudents, apellido: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <label
              htmlFor="editNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Edit Email:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editStudents.correo}
              onChange={(e) =>
                setEditStudents({ ...editStudents, correo: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <button
              onClick={handleSaveEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Save
            </button>
            <button className="ml-5" onClick={handleEmpty}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-[40vw] h-[80vh] p-[3rem]">
            <label
              htmlFor="addNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="addNombre"
              value={addStudent.nombre}
              onChange={(e) =>
                setAddStudent({ ...addStudent, nombre: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <label
              htmlFor="addNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido:
            </label>
            <input
              type="text"
              id="addNombre"
              value={addStudent.apellido}
              onChange={(e) =>
                setAddStudent({ ...addStudent, apellido: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <label
              htmlFor="addNombre"
              className="block text-sm font-medium text-gray-700"
            >
              dni:
            </label>
            <input
              type="text"
              id="addNombre"
              value={addStudent.dni}
              onChange={(e) =>
                setAddStudent({ ...addStudent, dni: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <label
              htmlFor="addNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Direccion:
            </label>
            <input
              type="text"
              id="addNombre"
              value={addStudent.direccion}
              onChange={(e) =>
                setAddStudent({ ...addStudent, direccion: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <label
              htmlFor="addNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Correo:
            </label>
            <input
              type="text"
              id="addNombre"
              value={addStudent.correo}
              onChange={(e) =>
                setAddStudent({ ...addStudent, correo: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <label
              htmlFor="addNombre"
              className="block text-sm font-medium text-gray-700"
            >
              Telefono:
            </label>
            <input
              type="text"
              id="addNombre"
              value={addStudent.telefono}
              onChange={(e) =>
                setAddStudent({ ...addStudent, telefono: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <button
              onClick={handleAddStudent}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Agregar
            </button>
            <button
              onClick={handleCloseModal}
              className="z-10 ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Cerrar Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
