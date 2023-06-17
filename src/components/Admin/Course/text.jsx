import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../../../redux/Store';

const TESTED = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}/admin/getAllUsers`);
        setData(response.data);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

console.log(data)

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TESTED;
