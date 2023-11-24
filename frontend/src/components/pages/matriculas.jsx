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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

const Matriculas2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [Matriculas, setMatricula] = useState([]);
  const [Carreras, setCarreras] = useState([]);
  const [Grupos, setGrupos] = useState([]);
  const [Niveles, setNiveles] = useState([]);
  const [Estudiantes, setEstudiante] = useState([]);
  
  const [editmatricula, setEditMatricula] = useState({
    estudiante_id: null,
  });


  const [selectedEstudianteId, setSelectedEstudianteId] = useState(null);
  const [filteredMatriculas, setFilteredMatriculas] = useState([]);

 

  const handleNivelChange = (event) => {
    setEditMatricula({ ...editmatricula, nivel_id: event.target.value });
  };

  const handleGrupoChange = (event) => {
    setEditMatricula({ ...editmatricula, grupo_id: event.target.value });
  };

  const handleCarreraChange = (event) => {
    setEditMatricula({ ...editmatricula, carrera_id: event.target.value });
  };

  const handleSearch = (searchQuery) => {
    // Filtra la lista de matrículas según la búsqueda y actualiza los resultados
    const matriculasFiltradas = Estudiantes.filter((matricula) =>
      matricula.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMatriculas(matriculasFiltradas);
  };

  const handlOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/matricula`);
      setMatricula(response.data);
      const response2 = await axios.get(`${API_URL}/carreras`);
      setCarreras(response2.data);
      const response3 = await axios.get(`${API_URL}/niveles`);
      setNiveles(response3.data);
      const response4 = await axios.get(`${API_URL}/grupos`);
      setGrupos(response4.data);
      const response5 = await axios.get(`${API_URL}/estudiante`);
      setEstudiante(response5.data);
      console.log(selectedEstudianteId);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (carrera) => {
    setEditMatricula({
      id: carrera.id,
      estudiante_id: carrera.estudiante_id,
      grupo_id: carrera.grupo_id,
      nivel_id: carrera.nivel_id,
      carrera_id: carrera.carrera_id,
    });
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/matricula/${editmatricula.id}`, {
        grupo_id: editmatricula.grupo_id,
        nivel_id: editmatricula.nivel_id,
        carrera_id: editmatricula.carrera_id,
      });
      fetchData();
      setEditMatricula({ estudiante_id: null });
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDelete = async ($id) => {
    try {
      await axios.delete(`${API_URL}/matricula/${$id}`);
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
        <TableCell align='left'>
          <div className=' text-center'>{carrera.carrera_nombre}</div>
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
      </React.Fragment>
    );
  }

  return (
    <div className='flex justify-center flex-col p-[3rem]'>
      <div  className="bg-gray-800  text-white flex justify-around h-[5vh] w-screen items-center "></div>
      <div className='flex justify-between p-[0.5rem] m-5'>
        <h1 className='text-center text-2xl m-3'>Lista de Matriculados</h1>
        <button onClick={handlOpenModal} className="bg-blue-500 text-white rounded-[5px] h-[7vh] items-center p-[0.5rem]"> Matricular</button>
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
          data={Matriculas} // Utiliza los datos de carreras aquí
          components={VirtuosoTableComponents}
          itemContent={rowContent}
        />
      </Paper>

      {editmatricula.estudiante_id !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-10 rounded-md">
            <div>
              <FormControl sx={{ m: 3, minWidth: 220 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Nivel</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={editmatricula.nivel_id}
          onChange={handleNivelChange}
          autoWidth
          label="Nivel"
        >
          <MenuItem value="">
            <em>None</em>
            </MenuItem>
          {Niveles.map(option => (
            <MenuItem key={option.nivel_id} value={option.nivel_id}>
              {option.nivel_id}
            </MenuItem>
          ))}
        </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 3, minWidth: 220 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Grupo</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={editmatricula.grupo_id}
          onChange={handleGrupoChange}
          autoWidth
          label="Grupo"
        >
          <MenuItem value="">
            <em>None</em>
            </MenuItem>
          {Grupos.map(option => (
            <MenuItem key={option.grupo_id} value={option.grupo_id}>
              {option.grupo_id}
            </MenuItem>
          ))}
        </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 3, minWidth: 220 }}>
              <InputLabel id="demo-simple-select-autowidth-label">carrera</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={editmatricula.carrera_id}
          onChange={handleCarreraChange}
          autoWidth
          label="Carreras"
        >
          <MenuItem value="">
            <em>None</em>
            </MenuItem>
          {Carreras.map(option => (
            <MenuItem key={option.carrera_id} value={option.carrera_id}>
              {option.nombre}
            </MenuItem>
          ))}
        </Select>
              </FormControl>
            </div>
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
          <div className="bg-white w-cover h-cover p-[3rem] flex flex-col rounded-lg gap-y-4">
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white px-4 py-2 w-[20px] h-[20px] flex items-center justify-center rounded-md hover:bg-blue-400 focus:outline-none"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <form action="/carreras">
              <div className="flex flex-col gap-y-8 pb-7">
                

              <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          options={Matriculas.map((matricula) => matricula.nombre)}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar Estudiante"
              variant="outlined"
             
              fullWidth
              onChange={(event, value) => {
                const selectedEstudiante = Estudiantes.find(
                  (estudiante) => estudiante.nombre === value
                );
                setSelectedEstudianteId(
                  selectedEstudiante ? selectedEstudiante.id : null
                );
              }}
            />
          )}
        />
      </Stack>
   



            
                <div>
                  <FormControl sx={{  minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">carrera</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={''}
          onChange={handleCarreraChange}
          autoWidth
          label="Carreras"
        >
          <MenuItem value="">
            <em>None</em>
            </MenuItem>
          {Carreras.map(option => (
            <MenuItem key={option.carrera_id} value={option.carrera_id}>
              {option.nombre}
            </MenuItem>
          ))}
        </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl sx={{  minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Nivel</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={""}
          onChange={handleNivelChange}
          autoWidth
          label="Nivel"
        >
          <MenuItem value="">
            <em>None</em>
            </MenuItem>
          {Niveles.map(option => (
            <MenuItem key={option.nivel_id} value={option.nivel_id}>
              {option.nivel_id}
            </MenuItem>
          ))}
        </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl sx={{  minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Grupo</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={''}
          onChange={handleGrupoChange}
          autoWidth
          label="Grupo"
        >
          <MenuItem value="">
            <em>None</em>
            </MenuItem>
          {Grupos.map(option => (
            <MenuItem key={option.grupo_id} value={option.grupo_id}>
              {option.grupo_id}
            </MenuItem>
          ))}
        </Select>
                  </FormControl>
                </div>
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
  );
};
Matriculas2.displayName = 'Matriculas2';
export default Matriculas2;
