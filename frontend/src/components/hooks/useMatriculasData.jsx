import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './config';

const useMatriculasData = () => {
  const [Matriculas, setMatricula] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/matricula`);
      setMatricula(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { Matriculas, fetchData };
};

export default useMatriculasData;