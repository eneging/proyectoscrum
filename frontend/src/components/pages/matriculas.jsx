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
  
    console.log('Edit button clicked for:', carrera);
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
        <TableCell align='left'>{carrera.nombre}</TableCell>
        <TableCell align='left'>{carrera.carrera}</TableCell>
        <TableCell align='left'>{carrera.nivel}</TableCell>
   
        <TableCell align='left'>
          <button
            onClick={() => handleEdit(carrera)}
            className="px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
          >
            Mostrar Estudiantes
          </button>
        </TableCell>
      </React.Fragment>
    );
  }

  return (
    <div className='flex justify-center flex-col p-[3rem]'>
      <div className='flex justify-end'>
        <h1 className='text-center text-2xl'>Lista de Matriculadosss</h1>
      </div>

      <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carreras</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">estudiantes Matriculados</th>
          </tr>
        </thead>
      <Paper style={{ height: 400, width: '100%' }}>
        <TableVirtuoso
          data={carreras} // Utiliza los datos de carreras aquí
          components={VirtuosoTableComponents}
          itemContent={rowContent}
        />
      </Paper>
    </div>
  );
};
Matriculas2.displayName = 'Matriculas2';
export default Matriculas2;