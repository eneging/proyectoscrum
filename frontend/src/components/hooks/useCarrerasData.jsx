import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './config';

const useCarrerasData = () => {
  const [Carreras, setCarrera] = useState([]);

  useEffect(() => {
    fetchDataCarreras();
  }, []);

  const fetchDataCarreras = async () => {
    try {
      const response = await axios.get(`${API_URL}/carreras`);
      setCarrera(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { Carreras, fetchDataCarreras };
};

export default useCarrerasData;