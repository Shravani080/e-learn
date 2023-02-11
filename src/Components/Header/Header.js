import React from 'react'
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
    const user = JSON.parse(localStorage.getItem("userdetails"))
    const navigate = useNavigate();

    const handler = (e) => {
        e.preventDefault()
        localStorage.removeItem({ username: user.username, email: user.email })
        navigate("/Login");
    }


    return (
        <div className='header'>
            Hello,{user.username}
            <button id='logout-btn' onClick={handler}>Logout</button>
        </div>
    )
}

export default Header
