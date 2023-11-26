import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config";
import Sidebar from "./Registromatriculas/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';


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
    timer: 1500
  });
}



  };

  {/* crear carreras */}

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
      setNewCarrera({ nombre: "" });
    } catch (error) {
      alert("No ha ingresado datos")
      console.error("Error creando carrera:", error);
    }
  };

  return (

    <div className="flex h-screen ">

      <Sidebar></Sidebar>
    <div className="flex flex-col  justify-center   ">
      <div className="flex py-[4%] justify-end">
        <button
          onClick={() => handlOpenModal()}
          className="px-4 py-2 font-medium text-white bg-gray-800 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
        >
          Add Carrera
        </button>
      </div>


      <div className=' flex justify-end w-[60vw] px-[10%] '>
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
                <TableCell> <div className='text-center px-[3vw] text-white'>  Nombre Carrera</div></TableCell>
              
             
                <TableCell><div className='text-center text-white'>Acción</div></TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((carrera) => (
                <TableRow key={carrera.id}>
                  <TableCell align='left'>  {" "}
                  <div className="flex gap-4 items-center">
                    <img className="w-[50px]" src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/favicon/1696433166/ico%20favicon%20new.ico"></img>
                    <div>{carrera.nombre}</div>
                  </div></TableCell>
                  
                  
                  <TableCell align='left'>
                    <div className='flex gap-4 justify-center'>
                      <button
                        onClick={() => handleEdit(carrera)}
                        className="px-4 py-2 font-medium text-white hover:bg-green-500 rounded-md bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                      >
                        editar
                      </button>
                      <button
                        onClick={() => handleDelete(carrera.carrera_id)}
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
      {/* Modal para crear carrera */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-[30vw] h-[50vh] p-[3rem] flex flex-col rounded-lg gap-y-6">
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white px-4 py-2 w-[20px] h-[20px] flex items-center justify-center rounded-md hover:bg-blue-400 focus:outline-none "
            >
              <span className="material-symbols-outlined">
close
</span>
</button>
            <form onSubmit={handleForm} action="/carreras">
              <div className="flex flex-col gap-y-3 pb-10">
                <label className="text-gray-500">Name Carrera</label>
                <input
                  type="text"
                  placeholder="Add carrera"
                  className="w-[250px] h-[30px] pl-2 hover:bg-gray-200"
                  name="nombre"
                  onChange={handleCreate}
                />
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 w-[80px] h-[30px] flex items-center justify-center rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
              >
                Insert
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Carreras;


