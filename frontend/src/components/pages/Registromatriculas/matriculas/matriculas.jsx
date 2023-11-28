import  { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../../../config';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';
import Sidebar from '../sidebar';
import useMatriculasData from '../../../hooks/useMatriculasData';
import EditMatricula from './modales/EditMatricula';
import CrearMatriucula from './modales/CrearMatriucula';

const Matriculas2 = () => {
  const { Matriculas, fetchData } = useMatriculasData();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [editmatricula, setEditMatricula] = useState({ estudiante_id: null });

  const handlOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const handlOpenModal2 = () => {
    setModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setModalOpen2(false);
  };


  useEffect(() => {
    fetchData();
  }, []);

const handlefetch = () =>{

  fetchData();
}
 

  const handleEdit = (carrera) => {
    setEditMatricula({
      id: carrera.id,
      estudiante_id: carrera.estudiante_id,
      grupo_id: carrera.grupo_id,
      nivel_id: carrera.nivel_id,
      carrera_id: carrera.carrera_id,
    });

    handlOpenModal2();
  };

  const handleDelete = async ($id) => {
    try {
      await axios.delete(`${API_URL}/matricula/${$id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Renderización del componente
  return (
    <div className='flex '>
      <Sidebar></Sidebar>
      <div className='flex justify-center flex-col py-[4vh]  w-[80vw]'>
        <div className='flex justify-between p-[0.5rem] '>
          <h1 className=' text-2xl px-[1.5rem]'>Lista de Matriculados</h1>
          <button
            onClick={handlOpenModal}
            className="bg-blue-500 text-white rounded-[5px] h-[7vh] items-center p-[0.5rem]">
            Matricular
          </button>
        </div>
<div className=' flex justify-center'>
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
                width: '90%',
                justifyContent: 'spacebetween',
              backgroundColor: 'rgb(30, 34, 39)',
     
                
              }}
              >
                <TableCell> <div className='text-start  px-[3vw] text-white'>Nombre</div></TableCell>
                <TableCell><div className='text-start  px-[3vw] text-white'>Carrera</div></TableCell>
                <TableCell><div className='text-center text-white'>Nivel</div></TableCell>
                <TableCell><div className='text-center text-white'>Grupo</div></TableCell>
                <TableCell><div className='text-center text-white'>Acción</div></TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {Matriculas.map((carrera) => (
                <TableRow key={carrera.id}>
                  <TableCell align='left'> <div className=' text-center w-[10rem]'>{carrera.nombre}</div></TableCell>
                  <TableCell align='left'>
                    <div className=' text-center  w-[10rem] '>{carrera.carrera_nombre}</div>
                  </TableCell>
                  <TableCell align='left'>
                    <div className=' text-center'>Nivel {carrera.nivel_id}</div>
                  </TableCell>
                  <TableCell align='left'>
                    <div className=' text-center'>Grupo {carrera.grupo_id}</div>
                  </TableCell>
                  <TableCell align='left'>
                    <div className='flex gap-4 justify-center'>
                      <button
                        onClick={() => handleEdit(carrera)}
                        className="px-4 py-2 font-medium text-white hover:bg-green-500 rounded-md bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                      >
                        editar
                      </button>
                      <button
                        onClick={() => handleDelete(carrera.id)}
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
        {modalOpen2  && (
          <EditMatricula data = {editmatricula} onClose2={handleCloseModal2} onfetch={handlefetch}></EditMatricula>
        )}
        {modalOpen && (
          <CrearMatriucula onClose={handleCloseModal} onfetch={handlefetch}></CrearMatriucula>
        )}
      </div>
    </div>
  );
};

Matriculas2.displayName = 'Matriculas2';
export default Matriculas2;
