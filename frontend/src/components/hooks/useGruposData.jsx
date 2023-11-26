import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './config';

const useGruposData = () => {
  const [Grupos, setMatricula] = useState([]);

  useEffect(() => {
    fetchDataGrupos();
  }, []);

  const fetchDataGrupos = async () => {
    try {
      const response = await axios.get(`${API_URL}/grupos`);
      setMatricula(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { Grupos, fetchDataGrupos };
};

export default useGruposData;