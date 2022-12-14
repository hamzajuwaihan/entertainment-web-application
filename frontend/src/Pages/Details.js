import React, { useEffect } from 'react'
import Featured from '../components/Details/Featured'
import DetailsStart from '../components/Details/DetailsStart'
// import OtherStart from '../components/Details/OtherStart'
import { useParams } from 'react-router';
import axios from 'axios';
import PostComment from '../components/Details/PostComment';
import Post from '../components/Details/PostRelatedComponents/Post';
function Details() {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState({});
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/movie/${movieId}`).then((res) => {
      setMovie(res.data.movie);
      setPosts(res.data.posts);
      document.title = res.data.movie.title;
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {

  }, []);
  return (
    <>

      <Featured image={movie.image} poster={movie.poster} />
      <DetailsStart title={movie.title} rating={movie.rating} overview={movie.overview} genre={movie.genre} runtime={movie.runtime} popularity={movie.popularity} release_date={movie.release_date} />
      {posts.map((post) => {
        return (
          <Post {...post} key={post.id} />
        )
      })}
      <PostComment />
    </>
  )
}

export default Details