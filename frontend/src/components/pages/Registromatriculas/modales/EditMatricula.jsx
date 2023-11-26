
import { useState ,useEffect } from "react";

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem , InputLabel  } from "@mui/material";
import API_URL from "../../../../config";
import axios from "axios";
import useNivelesData from "../../../hooks/useNivelesData";
import useCarrerasData from "../../../hooks/useCarrerasData";
import useGruposData from "../../../hooks/useGruposData";


function EditMatricula() {
    const { Carreras, fetchDataCarreras } = useCarrerasData();
    const { Grupos, fetchDataGrupos } = useGruposData();
    const { Niveles, fetchDataNiveles } = useNivelesData();
    const [modalOpen, setModalOpen] = useState(false);

    const [editmatricula, setEditMatricula] = useState({
        estudiante_id: null,
        carrera_id: '',  // Asigna un valor inicial adecuado
        nivel_id: '',    // Asigna un valor inicial adecuado
        grupo_id: '',    // Asigna un valor inicial adecuado
      });

    const handleNivelChange = (event) => {
        setEditMatricula({ ...editmatricula, nivel_id: event.target.value });
      };
    
      const handleGrupoChange = (event) => {
        setEditMatricula({ ...editmatricula, grupo_id: event.target.value });
      };
    
      const handleCarreraChange = (event) => {
        setEditMatricula({ ...editmatricula, carrera_id: event.target.value });
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
    
          setEditMatricula({ estudiante_id: null });
        } catch (error) {
          console.error('Error updating student:', error);
        }
      };

      useEffect(() => {
        
        fetchDataCarreras();
        fetchDataGrupos();
        fetchDataNiveles();
    
        
      }, []);

    return (
    <>
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
          {Niveles.map((option, index)=> (
            <MenuItem key={index} value={option.nivel_id}>
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
          {Grupos.map( (option, index) => (
            <MenuItem key={index} value={option.grupo_id}>
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
          {Carreras.map((option, index)=> (
            <MenuItem key={index} value={option.carrera_id}>
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
    </>
  )
}

export default EditMatricula