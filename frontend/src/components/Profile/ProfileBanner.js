import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayInfo from './ProfileComponents/DisplayInfo'
import FavouriteMovies from './ProfileComponents/FavouriteMovies'
import MainInfo from './ProfileComponents/MainInfo'
import UserImage from './ProfileComponents/UserImage'

function ProfileBanner() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {
    const id = sessionStorage.getItem('id');
    document.title = 'My Profile';
    axios.get(`http://localhost:8000/api/users/${id}`, id).then((res) => {

      setUser(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [])
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="main-profile ">
          <div className="row">
            <UserImage />
            <div className="col-lg-4 align-self-center">
              {/* name and edit button */}
              <MainInfo name={user.name} />
            </div>
            {/* display info */}
            <DisplayInfo email={user.name} lastUpdate={user.updated_at} />
          </div>

          <FavouriteMovies />



        </div>
      </div>
    </div>

  )
}

export default ProfileBanner