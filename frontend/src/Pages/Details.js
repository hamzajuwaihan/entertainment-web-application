import React, { useEffect } from 'react'
import Featured from '../components/Details/Featured'
import DetailsStart from '../components/Details/DetailsStart'
import OtherStart from '../components/Details/OtherStart'
import { useParams } from 'react-router';
import axios from 'axios';
function Details() {
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(`https://localhost:8000/api/movie/${movieId}`).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <>
      <Featured />
      <DetailsStart />
      <OtherStart />
    </>
  )
}

export default Details