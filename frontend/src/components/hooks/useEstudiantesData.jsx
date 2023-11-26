import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './config';

const useEstudiantesData = () => {
  const [Estudiantes, setEstudiante] = useState([]);

  useEffect(() => {
    fetchDataEstudiantes();
  }, []);

  const fetchDataEstudiantes = async () => {
    try {
      const response = await axios.get(`${API_URL}/estudiante`);
      setEstudiante(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { Estudiantes, fetchDataEstudiantes };
};

export default useEstudiantesData;