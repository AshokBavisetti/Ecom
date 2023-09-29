import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Homepage.css"
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((res) => setData([res.data])) // Note: Wrap the data in an array
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Title:</strong> {item.title}, <strong>Price:</strong> ${item.price}<br/>
            <img src={item.image} id="img"/>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
