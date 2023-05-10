import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

/////////////Users Lists/////
const Users=()=>{
    const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);


     const loadUsers = async () => {
        const result = await axios.get("https://645b413ca8f9e4d6e7637b71.mockapi.io/crudapi");
        setUser(result.data.reverse());
      };
    
      const deleteUser = async id => {
        await axios.delete(`https://645b413ca8f9e4d6e7637b71.mockapi.io/crudapi/${id}`);
        loadUsers();
      };
    
      return (
        <div className="container">
          <div className="py-4">
            <h2 className="para">User's List</h2>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link class="btn btn-primary mr-2 me-2" to={`/users/profile/${user.id}`}>
                        Profile
                      </Link>
                      <Link
                        class="btn btn-outline-primary mr-2 me-2"
                        to={`/users/edit_user/${user.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        class="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default Users;