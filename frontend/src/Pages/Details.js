import React, { useEffect } from 'react'
import Featured from '../components/Details/Featured'
import DetailsStart from '../components/Details/DetailsStart'
import OtherStart from '../components/Details/OtherStart'
import { useParams } from 'react-router';
import axios from 'axios';
import PostComment from '../components/Details/PostComment';
function Details() {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/api/movie/${movieId}`).then((res) => {
      setMovie(res.data);
      console.log(movie)
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <>
      <Featured/>
      <DetailsStart title={movie.title} rating={movie.rating} overview={movie.overview} genre={movie.genre} runtime={movie.runtime} popularity={movie.popularity} release_date={movie.release_date} />
      <OtherStart />
      <PostComment/>
    </>
  )
}

export default Details