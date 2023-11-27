import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../../../config";
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
        
        Swal.fire( handleDelete(docente_id)
        )
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
        Swal.fire(handleSaveEdit());
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
      Swal.fire(handleStore());
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
                        src="https://i.pravatar.cc/150?img=1"
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
                      <button
                        onClick={() => handleEdit(teacher)}
                        className="px-4 py-2 font-medium text-white hover:bg-green-500 rounded-md bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                      >
                        editar
                      </button>
                      <button
                        onClick={() => handleDelete1(teacher.docente_id)}
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