import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightToBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import './ProfileIcon.css';

export default function ProfileIcon({ handler }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/userinformation')
    handleClose()
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };

  return (
    <div className='profile-main'>

      <FontAwesomeIcon
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        icon={faCircleUser}
        onClick={handleClick}
      />

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        <MenuItem onClick={handleProfileClick}>
          <FontAwesomeIcon className='profile-menu' icon={faUser} onClick={handleClose} />
          Profile
        </MenuItem>
        <MenuItem onClick={handler} >
          <FontAwesomeIcon className='logout-menu' icon={faRightToBracket} />
          Logout
        </MenuItem>

      </Menu>
    </div>
  );
}
