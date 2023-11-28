import axios from "axios";
import API_URL from "../../../../config";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import {
  Table,
  TableBody,
  TableCell,

  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';




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

  // alert Agregar studiante//

  const handleAddStudent1 = () => {
    Swal.fire({
      title: "Deseas guardar los cambios?",
      showDenyButton: true,

      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(handleAddStudent(), handleCloseModal());
        if (handleAddStudent) {
          Swal.fire({
            title: "Guardado!",
            text: "El registro ha sido Guardado.",
            icon: "success"
          });
         }
      } else if (result.isDenied) {
        Swal.fire("Datos no guardados");
      }
    });
  };

  // Funcion para agregar estudiantes //

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
      fetchData();
      setAddStudent({
        nombre: "",
        apellido: "",
        dni: "",
        direccion: "",
        correo: "",
        telefono: "",
      });
    } catch (error) {
      console.error("Error adding student:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  // alert editar//
  const handleSaveEdit1 = () => {
    Swal.fire({
      title: "Deseas guardar los cambios?",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(handleSaveEdit())
        if (handleSaveEdit) {
          Swal.fire({
            title: "Guardado!",
            text: "El registro ha sido Guardado.",
            icon: "success"
          });
         }
      } else if (result.isDenied) {
        Swal.fire("Datos no guardados");
      }
    });
  };

  // Funcion para editar estudiantes //
  const handleSaveEdit = async () => {
    try {
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

  const handleEdit = (estudiante) => {
    setEditStudents({
      estudiante_id: estudiante.estudiante_id,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      correo: estudiante.correo,
    });
  };
  const handleDelete1 = (estudiante_id) => {
    Swal.fire({
      title: "Estas Seguro?",
      text: "No podras recuperar la informacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(handleDelete(estudiante_id))
        if (handleDelete) {
          Swal.fire({
            title: "Eliminado!",
            text: "El registro ha sido eliminado.",
            icon: "success"
          });
         }
      }
    });
  };

  // Funcion para borrar estudiantes del registro

  const handleDelete = async (estudiante_id) => {
    try {
      await axios.delete(`${API_URL}/estudiante/${estudiante_id}`);
      // Actualizar la lista de estudiantes después de la eliminación
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Funciones para abrir y cerrar el modal
  const handlOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Funcion para vaciar los datos y cerrar el modal de editar
  const handleEmpty = () => {
    setEditStudents({
      estudiante_id: null,
      nombre: "",
      apellido: "",
      correo: "",
    });
  };

  return (

    <div className="flex">

<Sidebar></Sidebar>

<div className="flex justify-center flex-col items-center  w-[75vw]">
      <div className="bg-gray-800  text-white flex justify-around h-[7vh]  items-center  "></div>
      <div className="flex justify-between p-[1rem] w-[85vw]  ">
        <h1 className="text-center text-xl  px-[8.5vw]">
          Lista de estudiantes
        </h1>
        <button
          onClick={handlOpenModal}
          className="bg-blue-500 text-white rounded-[5px] p-[0.5rem]"
        >
          Crear Estudiante
        </button>
      </div>


<div className=' flex   '>
        <Box
          component={Paper}
          sx={{
            height: 450,
            width: '100%',
            overflow: 'auto',
            '& .MuiTableContainer-root': {
              maxHeight: 380,
            },
            '& .MuiTableHead-root': {
              position: 'sticky',
              top: 0,
              backgroundColor: 'rgb(30, 34, 39)',
            
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow
               sx={{
                position: 'sticky',
                top: 0,
                width: '100%',
                justifyContent: 'spacebetween',
              backgroundColor: 'rgb(30, 34, 39)',
     
                
              }}
              >
                <TableCell> <div className='text-center px-[7vw] text-white'> Nombre{"  "}</div></TableCell>
                <TableCell><div className='text-center  px-[2vw] text-white'>rol</div></TableCell>
                <TableCell><div className='text-center text-white'> estado{" "}</div></TableCell>
                <TableCell><div className='text-center text-white'> Telefono{" "}</div></TableCell>
                <TableCell><div className='text-center text-white'> Dni{" "}</div></TableCell>
                <TableCell><div className='text-center text-white'>Acción</div></TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((carrera) => (
                <TableRow key={carrera.id}>
                  <TableCell align='left'> <div className=' text-center w-[10rem]'> 
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {`${carrera.nombre} ${carrera.apellido}`}
                      </div>
                      <div className="text-sm text-gray-500">
                        {`${carrera.correo}`}
                      </div>
                    </div>
                  </div>
                  
                  </div></TableCell>

                  <TableCell>Estudiante</TableCell>
                  <TableCell> <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span></TableCell>
                  <TableCell align='left'>
                  <div className="text-sm text-center text-gray-500 ">
                    {`${carrera.dni}`}
                  </div>
                  </TableCell>
                  <TableCell align='left'>
                    <div className=' text-center'>{`${carrera.telefono}`}</div>
                  </TableCell>
                  
                  <TableCell align='left'>
                    <div className='flex gap-4 justify-center'>
                      <button type="submit"
                        onClick={() => handleEdit(carrera)}
                        className="px-4 py-2 font-medium text-white hover:bg-green-500 rounded-md bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                      >
                        editar
                      </button>
                      <button
                        onClick={() => handleDelete1(carrera.estudiante_id)}
                        className="px-4 py-2 font-medium text-white hover:bg-green-500 rounded-md bg-red-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                      >
                        delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        </div>



  
   

      {/*---------------------------- MODAL PARA EDITAR ESTUDIANTES ------------------------- */}

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
              onClick={handleSaveEdit1}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Guardar
            </button>
            <button
              className="ml-2 bg-gray-500 text-white px-2 py-2 rounded-md hover:bg-gray-700"
              onClick={handleEmpty}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/*-------------------- MODAL PARA AGREGAR ESTUDIANTES ------------------------*/}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-[35vw] h-cover p-[2rem]">
            <div className="w-[370px] flex  justify-end">
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white  px-4 py-2 w-[20px] h-[20px] flex items-center justify-center rounded-md hover:bg-blue-400 focus:outline-none "
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            </div>
            <label
              htmlFor="addNombre"
              className="block text-sm font-medium text-gray-700 pt-6"
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
              className="p-2 mb-2 w-full boder-solid border-2"
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
              className=" p-2 mb-2 w-full  boder-solid border-2"
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
              className=" p-2 mb-2 w-full  boder-solid border-2"
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
              className=" p-2 mb-2 w-full  boder-solid border-2"
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
              className="p-2 mb-2 w-full  boder-solid border-2"
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
              className=" p-2 mb-2 w-full  boder-solid border-2"
            />
            <button
              onClick={handleAddStudent1}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Agregar
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Students;
