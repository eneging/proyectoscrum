import { useState, useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem, InputLabel } from "@mui/material";
import API_URL from "../../../../../config";
import axios from "axios";
import useNivelesData from "../../../../hooks/useNivelesData";
import useCarrerasData from "../../../../hooks/useCarrerasData";
import useGruposData from "../../../../hooks/useGruposData";

function EditMatricula({ data , onClose2 }) {
  const { Carreras, fetchDataCarreras } = useCarrerasData();
  const { Grupos, fetchDataGrupos } = useGruposData();
  const { Niveles, fetchDataNiveles } = useNivelesData();
  

  const [editmatricula, setEditMatricula] = useState({
    id: data.id,
    estudiante_id: data.estudiante_id || '',
    carrera_id: data.carrera_id || '',
    nivel_id: data.nivel_id || '',
    grupo_id: data.grupo_id || '',
    Fecha_Carrera: data.Fecha_Carrera || '',
    Fecha_Grupo: data.Fecha_Grupo || '',
    Fecha_Nivel: data.Fecha_Nivel || '',
  });

  const handleCloseModal = () => {
    onClose2();
      };

  const handleNivelChange = (event) => {
    console.log('Nuevo valor de nivel:', event.target.value);
    setEditMatricula((prevEditMatricula) => ({
      ...prevEditMatricula,
      nivel_id: event.target.value
    }));
  };

  const handleGrupoChange = (event) => {
    console.log('Nuevo valor de grupo:', event.target.value);
    setEditMatricula((prevEditMatricula) => ({
      ...prevEditMatricula,
      grupo_id: event.target.value
    }));
  };

  const handleCarreraChange = (event) => {
    console.log('Nuevo valor de carrera:', event.target.value);
    setEditMatricula((prevEditMatricula) => ({
      ...prevEditMatricula,
      carrera_id: event.target.value
    }));
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${API_URL}/matricula/${editmatricula.id}`, {
        estudiante_id: editmatricula.estudiante_id,
        grupo_id: editmatricula.grupo_id,
        nivel_id: editmatricula.nivel_id,
        carrera_id: editmatricula.carrera_id,
        Fecha_Carrera: editmatricula.Fecha_Carrera,
        Fecha_Grupo: editmatricula.Fecha_Grupo,
        Fecha_Nivel: editmatricula.Fecha_Nivel,
      });

      onClose2();
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
        <div className="bg-white p-10 rounded-md  ">

        <button
            onClick={handleCloseModal}
            className="bg-gray-500 text-white px-4 py-2 w-[20px] h-[20px] flex items-center justify-center rounded-md hover:bg-blue-400 focus:outline-none"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          
          <input
            className="px-10 h-[7vh] border-2 border-solid border-gray-300 hidden"
            value={editmatricula.estudiante_id}
            type="text"
            onChange={(e) => setEditMatricula({ ...editmatricula, estudiante_id: e.target.value })}
          />
          <input
            className="px-10 h-[7vh] border-2 border-solid border-gray-300 hidden "
            value={editmatricula.Fecha_Carrera}
            type="text"
            onChange={(e) => setEditMatricula({ ...editmatricula, Fecha_Carrera: e.target.value })}
          />
          <input
            className="px-10 h-[7vh] border-2 border-solid border-gray-300 hidden"
            value={editmatricula.Fecha_Nivel}
            type="text"
            onChange={(e) => setEditMatricula({ ...editmatricula, Fecha_Nivel: e.target.value })}
          />
          <input
            className="px-10 h-[7vh] border-2 border-solid border-gray-300 hidden"
            value={editmatricula.Fecha_Grupo}
            type="text"
            onChange={(e) => setEditMatricula({ ...editmatricula, Fecha_Grupo: e.target.value })}
          />

          <div>
            <FormControl sx={{ m: 3, minWidth: 220 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Nivel</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={editmatricula.nivel_id || ''}
                onChange={handleNivelChange}
                autoWidth
                label="Nivel"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Niveles.map((option, index) => (
                  <MenuItem key={index} value={option.nivel_id || ''}>
                    {option.nivel_id || ''}
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
                value={editmatricula.grupo_id || ''}
                onChange={handleGrupoChange}
                autoWidth
                label="Grupo"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Grupos.map((option, index) => (
                  <MenuItem key={index} value={option.grupo_id || ''}>
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
                value={editmatricula.carrera_id || ''}
                onChange={handleCarreraChange}
                autoWidth
                label="Carreras"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Carreras.map((option, index) => (
                  <MenuItem key={index} value={option.carrera_id || ''}>
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
  );
}

export default EditMatricula;
