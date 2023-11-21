
import axios from 'axios';
import API_URL from '../../config';
import { useEffect, useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);

 useEffect(() => {
    // Obtener la lista de estudiantes al cargar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/carreras`);
      setStudents(response.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/carreras/${id}`);
      // Actualizar la lista de estudiantes después de la eliminación
      fetchData();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h1>List of Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.carrera_id}>
            {`${student.nombre} ${student.apellido}`}
            <button onClick={() => handleDelete(student.carrera_id)}>Delete</button>
          </li>
        ))}
      </ul>

    
    
    </div>
  );
};

export default Students;