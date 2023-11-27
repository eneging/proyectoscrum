import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './config';

const useNivelesData = () => {
  const [Niveles, setNiveles] = useState([]);

  useEffect(() => {
    fetchDataNiveles();
  }, []);

  const fetchDataNiveles = async () => {
    try {
      const response = await axios.get(`${API_URL}/niveles`);
      setNiveles(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { Niveles, fetchDataNiveles };
};

export default useNivelesData;