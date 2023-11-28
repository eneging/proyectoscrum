import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../../hooks/config";
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
              className="border p-2 mb-2 w-full"
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete1=(docente_id)=>{
    Swal.fire({
      title: "Estas Seguro?",
      text: "No podras recuperar la informacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
         Swal.fire( handleDelete(docente_id))
         if (handleDelete) {
          Swal.fire({
            title: "Eliminado!",
            text: "El registro ha sido eliminado.",
            icon: "success"
          });
         }
      }   
    });
   }

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

  //alert editar//
  const handleSaveEdit1 =() =>{
    Swal.fire({
      title: "Deseas guardar los cambios?",
      showDenyButton: true,
      
      confirmButtonText: "Guardar",
      denyButtonText: `Cancelar`
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
        Swal.fire("Datos no Guardados");
      }
    })
   
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

  // alert Agregar Docentes//


const handleStore1 =() =>{
  Swal.fire({
    title: "Deseas guardar los cambios?",
    showDenyButton: true,
    
    confirmButtonText: "Guardar",
    denyButtonText: `Cancelar`
  }).then((result) => {
     if (result.isConfirmed) {
      Swal.fire(handleStore())
      if (handleStore) {
        Swal.fire({
          title: "Guardado!",
          text: "El registro ha sido Guardado.",
          icon: "success"
        });
       }
    } else if (result.isDenied) {
      Swal.fire("Datos no guardados");
    }
  })
 
};
  const handleStore = async () => {
    try {
      await axios.post(`${API_URL}/docentes`, {
        nombre: storeTeacher.nombre,
        apellido: storeTeacher.apellido,
        dni: storeTeacher.dni,
        direccion: storeTeacher.direccion,
        correo: storeTeacher.correo,
        telefono: storeTeacher.telefono,
      });
      fetchData();
      handleCloseModal(true);
      setStoreTeacher({
        docente_id: null,
        nombre: "",
        apellido: "",
        dni: "",
        direccion: "",
        correo: "",
        telefono: "",
      });
      
    } catch (error) {
      console.error("Error save teacher:", error);
    }
  };
    
  function cerrarModal() {
    setModalOpen(false)
  }


 

  return (
<div className="flex" >
  <Sidebar></Sidebar>

   <div className="flex justify-center flex-col items-center" >
        <div  className="bg-gray-800  text-white flex justify-around h-[3vh] w-cover items-center "></div>
  <div className='flex justify-between p-[1rem] w-[75vw]  '>
        <h1 className=' text-2xl  px-[2.5rem]'>Lista de Docentes</h1>
        <button
          onClick={() => handlOpenModal()}
          className="px-4 py-2 font-medium text-white bg-gray-800 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
        >
          Agregar Docente
        </button>
      </div>




      <div className=' flex justify-end w-full'>
        <Box
          component={Paper}
          sx={{
            height: 450,
            width: '95%',
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
                <TableCell> <div className='text-center px-[3vw] text-white'> Usuario{"  "}</div></TableCell>
                <TableCell><div className='text-center  px-[3vw] text-white'> dni</div></TableCell>
                <TableCell><div className='text-center text-white'> telefono{" "}</div></TableCell>
             
                <TableCell><div className='text-center text-white'>Acción</div></TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {teacher.map((carrera) => (
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
                        onClick={() => handleDelete1(carrera.docente_id)}
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



   
      {/* Modal para la edición */}
      {editTeacher.docente_id !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md w-[350px]">
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
            <div className="flex">
            <button
              onClick={handleSaveEdit1}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Guardar
            </button>
            <form action="" onSubmit={cerrarModal}>
            <button
              type="submit" 
              className="z-10 ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Cancelar
            </button>
            </form>
            </div>
          </div>
        </div>
      )}

      
      {/*-------------------- MODAL PARA AGREGAR docentes ------------------------*/}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white p-4 rounded-md">
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
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="addNombre"
              value={storeTeacher.nombre}
              onChange={(e) =>
                setStoreTeacher({ ...storeTeacher, nombre: e.target.value })
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
              id="addApellido"
              value={storeTeacher.apellido}
              onChange={(e) =>
                setStoreTeacher({ ...storeTeacher, apellido: e.target.value })
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
              value={storeTeacher.dni}
              onChange={(e) =>
                setStoreTeacher({ ...storeTeacher, dni: e.target.value })
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
              value={storeTeacher.direccion}
              onChange={(e) =>
                setStoreTeacher({ ...storeTeacher, direccion: e.target.value })
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
              value={storeTeacher.correo}
              onChange={(e) =>
                setStoreTeacher({ ...storeTeacher, correo: e.target.value })
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
              value={storeTeacher.telefono}
              onChange={(e) =>
                setStoreTeacher({ ...storeTeacher, telefono: e.target.value })
              }
              className="border p-2 mb-2 w-full"
            />
            <button
              onClick={handleStore1}
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

export default Teachers;
