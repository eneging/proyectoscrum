import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../config';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const Matriculas2 = () => {
  const [carreras, setCarreras] = useState([]);
  const [editmatricula, setEditMatricula] = useState({
    estudiante_id: null,
    nombre: '',
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/matriculas`);
      setCarreras(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (carrera) => {
    setEditMatricula({ carrera_id: carrera.carrera_id, nombre: carrera.nombre });
    console.log('Edit button clicked for:', carrera);
  };


  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/matriculas/${editmatricula.estudiante_id}`, {
        nombre: editmatricula.nombre,
      });
      fetchData();
      setEditMatricula({ estudiante_id: null, nombre: '' });
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };


  const handleDelete = async (estudiante_id) => {
    try {
      await axios.delete(`${API_URL}/carreras/eliminar/matricula/estudiante/${estudiante_id}`);
      fetchData();

    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };

  function rowContent(_index, carrera) {
    return (
      
       <React.Fragment>
      
      
   <TableCell align='left'> {carrera.nombre}</TableCell>
        <TableCell align='left'><div className=' text-center'>{carrera.carrera}</div></TableCell>
        <TableCell align='left'> <div className=' text-center'>{carrera.nivel}</div></TableCell>
        <TableCell align='left'><div className=' text-center'>{carrera.grupo}</div></TableCell>
        <TableCell align='left'>
          
          <div className='flex gap-4 justify-center'>
          <button
            onClick={() => handleEdit(carrera)}
            className="px-4 py-2 font-medium text-white hover:bg-green-500 rounded-md bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
          >

            editar
          </button>

          <button
            onClick={() => handleDelete(carrera.estudiante_id)}
            className="px-4 py-2 font-medium text-white hover:bg-green-500 rounded-md bg-red-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
          >

         delete
          </button>
          </div>
        </TableCell>

       
      </React.Fragment> 
    );
  }

  return (
    <div className='flex justify-center flex-col p-[3rem]'>
         <div  className="bg-gray-800  text-white flex justify-around h-[5vh] w-screen items-center "></div>
      <div className='flex justify-between p-[0.5rem] m-5'>
        <h1 className='text-center text-2xl m-3'>Lista de Matriculados</h1>
        <button className="bg-blue-500 text-white rounded-[5px] h-[7vh] items-center p-[0.5rem]">Crear Matricula</button>
      </div>

      <thead className='flex justify-center'>
          <tr className='bg-gray-800   flex justify-around w-[100%]'>
            <th className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-400 uppercase tracking-wider ">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-400 uppercase tracking-wider ">Carrera</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-400 uppercase tracking-wider ">Nivel</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-400 uppercase tracking-wider ">Grupo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white hover:text-orange-400 uppercase tracking-wider ">Accion</th>
          </tr>
        </thead>
      <Paper style={{ height: 400, width: '100%' }}>
        <TableVirtuoso
          data={carreras} // Utiliza los datos de carreras aquí
          components={VirtuosoTableComponents}
          itemContent={rowContent}
        />
      </Paper>



      
      {editmatricula.estudiante_id !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <label htmlFor="editNombre" className="block text-sm font-medium text-gray-700">
              Edit Name:
            </label>
            <input
              type="text"
              id="editNombre"
              value={editmatricula.nombre}
              onChange={(e) => setEditMatricula({ ...editmatricula, nombre: e.target.value })}
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
    </div>
     
  );

};
Matriculas2.displayName = 'Matriculas2';
export default Matriculas2;