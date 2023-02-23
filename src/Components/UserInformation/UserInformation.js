import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './UserInformation.css';


function UserInformation() {
  const user = JSON.parse(localStorage.getItem("userdetails"))

  return (
    <div className='user-information-main'>

      <div className='profile-icon'>
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
      <div className='user-details'>
        Name: {user.username} <br />
        Email: {user.email}
      </div>

    </div>
  )
}

export default UserInformation
