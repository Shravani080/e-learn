import React, { useState } from 'react'
import AddUsers from '../Header/AddUsers';
import './Table.css';

const data = [
    { id: 1, name: "user", email: "userone@gmail.com" },
    { id: 2, name: "user2", email: "userone@gmail.com" },
    { id: 3, name: "user3", email: "userone@gmail.com" }];

const Table = () => {
   
    const [users, setUsers] = useState(data);
    const [editUser,setEditUser]=useState({})
    const [open, setOpen] = useState(false);


    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const EditUsers = (user) => {
       setEditUser(user)
        setOpen(true)
       
    }

    const handleAddUser = (user) => {
        setUsers([...users, { name: user.name, email: user.email, id: users.length + 1 }]);
        setOpen(false);
    };

    return (
        <div className='top-main'>
            <button className='add-btn' onClick={() => setOpen(true)}>Add</button>
            <AddUsers editUser={editUser} handleAddUser={handleAddUser} open={open} setOpen={setOpen} />
            <table className='table' border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{<button className='delete-btn' onClick={() => deleteUser(user.id)}>Delete</button>}</td>
                            <td>{<button className='edit-btn' onClick={() => EditUsers(user)}>Edit</button>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
