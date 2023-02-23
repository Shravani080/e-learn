import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import AddUsers from '../AddUser/AddUsers';
import SearchInput from '../SearchInput/SearchInput';
import './Table.css';
import Button from '@mui/material/Button';
import DeleteUserDialog from '../DeleteUser/DeleteUserDialog';
import Alert from '@mui/material/Alert';

const Table = ({ data, admins }) => {
    const [users, setUsers] = useState(data)
    const [editUser, setEditUser] = useState({})
    const [open, setOpen] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [sortOrder, setSortOrder] = useState('asc')
    const [searchinput, setSearchinput] = useState('')
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [userToDelete, setUserToDelete] = useState('')
    const [showSuccessAlert, setShowSuccessAlert] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userdetails"))
        for (let i = 0; i < admins.length; i++) {
            if (admins[i].email === user.email) {
                // console.log(admins[i])
                setIsAdmin(true)
            }
        }
    }, [admins])

    const EditUsers = (user) => {
        setEditUser(user)
        setOpen(true)
    }

    const updateEditUser = (updateUser) => {
        console.log(updateUser)
        const updatedUsers = users.map(user => {
            if (user.id === updateUser.id) {
                return updateUser
            } else {
                return user
            }
        });
        setUsers(updatedUsers);
    }

    const handleAddUser = (newUser) => {
        console.log(newUser)
        const addedUsers = [...users]
        let newUserId = 1
        addedUsers.forEach(user => {
            if (user.id >= newUserId) {
                newUserId = user.id + 1;
            }
        });

        addedUsers.push({ ...newUser, id: newUserId });
        setUsers(addedUsers);
        setOpen(false);
        setShowSuccessAlert("User has been successfully Added!")
    };

    const handleSort = (col) => {
        if (sortOrder === "asc") {
            const sortedUsers = users.sort((a, b) => {
                return a[col] > b[col] ? 1 : -1
            })
            setUsers(sortedUsers)
            setSortOrder("dsc")
        }
        if (sortOrder === "dsc") {
            const sortedUsers = users.sort((a, b) => {
                return a[col] < b[col] ? 1 : -1
            })
            setUsers(sortedUsers)
            setSortOrder("asc")
        }
    };

    const handleSearch = (e) => {
        setSearchinput(e.target.value);

    };

    const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchinput) ||
        user.email.toLowerCase().includes(searchinput)
    );
    console.log(filtered)

    const deleteUser = () => {
        setUsers(users.filter(user => user.id !== userToDelete))
        setShowDeleteDialog(false)
        setShowSuccessAlert("User has been Successfully Deleted!");
    };

    return (
        <div className='top-main'>

            <div className='search-add'>
                <SearchInput className="serch-input" handleSearch={handleSearch} setShowSuccessAlert={setShowSuccessAlert} />
                <span className='add-button'> {isAdmin && <Button variant="contained" href="#contained-buttons" onClick={() => { setOpen(true); setEditUser({}); }}>
                    Add
                </Button>}
                </span>
            </div>
            {open && <AddUsers editUser={editUser} EditUsers={EditUsers} updateEditUser={updateEditUser}
                handleAddUser={handleAddUser} open={open}
                setOpen={setOpen} />}
            <DeleteUserDialog deleteUser={deleteUser} showDeleteDialog={showDeleteDialog} setShowDeleteDialog={setShowDeleteDialog} />
            <div>
                <table className='table' border="1">
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('id')}>ID</th>
                            <th onClick={() => handleSort('name')}>Name</th>
                            <th onClick={() => handleSort('email')}>Email</th>
                            {isAdmin && <th>Delete</th>}
                            {isAdmin && <th>Edit</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ?
                            <tr className='no-records'>
                                No Record Found
                            </tr> : filtered.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {isAdmin && <td>{<button className='delete-btn' onClick={() => { setUserToDelete(user.id); setShowDeleteDialog(true) }}><FontAwesomeIcon icon={faTrash} /></button>}</td>}
                                    {isAdmin && <td>{<button className='edit-btn' onClick={() => EditUsers(user)}><FontAwesomeIcon icon={faPenToSquare} /></button>}</td>}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <div>
                {showSuccessAlert && <Alert className='alert-msg' variant="filled" severity="success" onClose={() => setShowSuccessAlert("")}>
                    {showSuccessAlert}
                </Alert>}
            </div>
        </div>
    )
}
export default Table




