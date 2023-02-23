import React from 'react'
import { useNavigate } from "react-router-dom";
import './Header.css';
import ProfileIcon from './ProfileIcon';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem("userdetails"))
  const navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault()
    localStorage.removeItem({ username: user.username, email: user.email })
    navigate("/loginpage");
  }

  return (
    <div className='header'>
      <div>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <div className='user-info-container'>
        <span className='user-name'>
          Hello,{user.username}
        </span>
        <span>
          <ProfileIcon handler={handler} />
        </span>
      </div>
    </div>
  )
}
export default Header
