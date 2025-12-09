import './App.css';
import React, {useState, useEffect, fetchData} from 'react';

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProj = async() => {
    try{
      const response = await fetch("http://localhost:5500/api/proj/");
      const data = await response.json();
      setData(data.data);
      setLoading(false);
      console.log(data.data);
    } catch(error) {
      setError(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true);
    getProj();
  }, []);
  return (
    loading ? (
      <h1 className="text-3xl font-bold underline">
        Loading...
      </h1>
    ) : (<>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    <table border={1}>
      <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Stages</th>
            </tr>
      </thead>
            {data.map(data=> (
              <tbody key={data.id}>
                <td>{data.id}</td>
                <td>{data.pname}</td>
                <td>{data.stages}</td>
              </tbody>
            ))}
          </table>
  </> )
  )};

export default App;
