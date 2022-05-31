import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { IUser } from './types'
import { getUsers } from "./services";

const User:FunctionComponent = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  const setAllUsers = useCallback( async () => {

    try {
        const res = await getUsers();
        setUsers(res)
    } catch (error) {
        console.log(error.message)
    }

      
  }, []);

  // reage à mudança de estado do componente
  useEffect(() => {
      setAllUsers();
  }, [setAllUsers]);  

  return (
    <>      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.street}, {user.address.suite} - {user.address.city}</td>
                  </tr>
                )
            })                                   
          }
        </tbody>
      </table>      
    </>
  )
};

export default User;