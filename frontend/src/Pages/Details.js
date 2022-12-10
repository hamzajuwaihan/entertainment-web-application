import React, { useEffect } from 'react'
import Featured from '../components/Details/Featured'
import DetailsStart from '../components/Details/DetailsStart'
import OtherStart from '../components/Details/OtherStart'
import { useParams } from 'react-router';
import axios from 'axios';
function Details() {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/api/movie/${movieId}`).then((res) => {
      setMovie(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <>
      <Featured/>
      <DetailsStart title={movie.title} />
      <OtherStart />
    </>
  )
}

export default Details