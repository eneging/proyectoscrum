import {InputLabel, MenuItem,FormControl,Select, TextField,Autocomplete,Stack,} from '@mui/material';

import { useEffect, useState } from 'react';
import useNivelesData from "../../../../hooks/useNivelesData";
import useCarrerasData from "../../../../hooks/useCarrerasData";
import useGruposData from "../../../../hooks/useGruposData";
import useEstudiantesData from '../../../../hooks/useEstudiantesData';


function CrearMatriucula({onClose}) {

    const { Carreras, fetchDataCarreras } = useCarrerasData();
    const { Grupos, fetchDataGrupos } = useGruposData();
    const { Niveles, fetchDataNiveles } = useNivelesData();
    const { Estudiantes, fetchDataEstudiantes } = useEstudiantesData();


    const [editmatricula, setEditMatricula] = useState({
        estudiante_id: null,
        carrera_id: '',  // Asigna un valor inicial adecuado
        nivel_id: '',    // Asigna un valor inicial adecuado
        grupo_id: '',    // Asigna un valor inicial adecuado
      });



useEffect(() => {
        

  fetchDataCarreras();
        fetchDataGrupos();
        fetchDataNiveles();
        fetchDataEstudiantes();
    
  }, []);

 

  const handleCloseModal = () => {
onClose();
  };

  const handleNivelChange = (event) => {
    console.log('Nuevo valor de carrera:', event.target.value);
    setEditMatricula({ ...editmatricula, nivel_id: event.target.value });
  };

  const handleGrupoChange = (event) => {
    console.log('Nuevo valor de carrera:', event.target.value);
    setEditMatricula({ ...editmatricula, grupo_id: event.target.value });
  };

  const handleCarreraChange = (event) => {
    console.log('Nuevo valor de carrera:', event.target.value);
    setEditMatricula({ ...editmatricula, carrera_id: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
  };


  return (
   <>
   <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white w-cover h-cover p-[3rem] flex flex-col rounded-lg gap-y-4">
          <button
            onClick={handleCloseModal}
            className="bg-gray-500 text-white px-4 py-2 w-[20px] h-[20px] flex items-center justify-center rounded-md hover:bg-blue-400 focus:outline-none"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-8 pb-7">
              <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                  freeSolo
                  options={Estudiantes.map((matricula) => matricula.nombre)}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Buscar Estudiante"
                      variant="outlined"
                      fullWidth
                      onChange={editmatricula.estudiante_id}
                    />
                  )}
                />
              </Stack>
              <div>
                <FormControl sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Carrera</InputLabel>
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
                    {Carreras.map((option, index) => (
                      <MenuItem key={index} value={option.carrera_id}>
                        {option.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ minWidth: 300 }}>
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
                    {Niveles.map((option , index) => (
                      <MenuItem key={index} value={option.nivel_id}>
                        {option.nivel_id}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ minWidth: 300 }}>
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
                    {Grupos.map((option ,index) => (
                      <MenuItem key={index} value={option.grupo_id}>
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
   
   </>
  )
}

export default CrearMatriucula