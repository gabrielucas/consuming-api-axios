import { useEffect, useState } from 'react';
import api from './services/api'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const getUsers = async () => {
      try{
        const res = await api.get('')
        setUsers(res.data)

      } catch(err){
        console.log('Ocorreu um erro: ', err.message)
      }
    };
  
    getUsers();

  }, []);  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {

            users.map((user, id) => {
              return (
                <>
                  <tr key={id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                </>
              )
            })   
                              
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
