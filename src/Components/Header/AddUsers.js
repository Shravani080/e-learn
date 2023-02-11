import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl, Input, InputLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& > :not(style)': { m: 1 }
};

export default function AddUsers({ open, setOpen, handleAddUser, editUser }) {
  debugger;
  const [user, setUser] = React.useState({
    id: null ,
    name: null,
    email: null
  });

  const handleChange = (e) => {
    
      editUser ({ ...user, [e.target.name]: e.target.value })
    
      setUser({...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple" >Name</InputLabel>
            <Input id="component-simple" name="name" defaultValue={editUser.name} onChange={handleChange} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple" >Email</InputLabel>
            <Input id="component-simple" name='email' defaultvalue={editUser.email} onChange={handleChange} />
          </FormControl>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => handleAddUser(user)} variant="contained" color="success">
              Add User
            </Button>
            <Button onClick={() => setOpen(false)} variant="outlined" color="error">
              close
            </Button>
          </Stack>

        </Box>
      </Modal>
    </div>
  );
}
