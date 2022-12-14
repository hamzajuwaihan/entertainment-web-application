import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import DisplayInfo from './ProfileComponents/DisplayInfo'
import FavouriteMovies from './ProfileComponents/FavouriteMovies'
import MainInfo from './ProfileComponents/MainInfo'
import UserImage from './ProfileComponents/UserImage'
import UserPosts from './ProfileComponents/UserPosts'

function ProfileBanner() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    document.title = 'My Profile';
    axios.get(`http://localhost:8000/api/users/${user.id}`, user.id).then((res) => {

      setUser(res.data.user)
      setFavouriteMovies(res.data.favouriteMovies)

    }).catch((err) => {
      console.log(err)
    })

  }, [])
  const handleEdit = (UserInfo) => {


    axios.put(`http://localhost:8000/api/updateuser/${user.id}`, UserInfo).then((res) => {
      setUser(res.data)
      console.log(res)
      // closeButton.current.click();
    }).catch((err) => {
      console.log(err)
    })
  }
  const closeButton = useRef(null);
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="main-profile ">
          <div className="row" >
            <UserImage name={user.name} />
            <div className="col-lg-4 align-self-center">
              {/* name and edit button */}
              <MainInfo user={user} handleEdit={handleEdit} closeButton={closeButton} />
            </div>
            {/* display info */}
            <DisplayInfo email={user.email} lastUpdate={user.updated_at} />
          </div>

          <FavouriteMovies favouriteMovies={favouriteMovies} />
          <UserPosts user={user}/>


        </div>
      </div>
    </div>

  )
}

export default ProfileBanner