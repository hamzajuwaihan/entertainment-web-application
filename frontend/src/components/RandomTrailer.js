import {useEffect, useState} from "react"
// import '../Trailer.css'
import axios from 'axios'
// import Movie from "./components/Movie"
import Youtube from 'react-youtube'

function RandomTrailer() {
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/movie"
    const DISCOVER_API = MOVIE_API + "discover/movie"
    const API_KEY = "0b74d46a9c124a510917686ef970bebf"
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"

    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(null)
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [movie, setMovie] = useState({title: "Loading Movies"})

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault()
        }

        const {data} = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })

        console.log(data.results[0])
        setMovies(data.results)
        setMovie(data.results[0])

        if (data.results.length) {
            await fetchMovie(data.results[0].id)
        }
    }
   

    const fetchMovie = async (id) => { 
        const random = Math.floor(Math.random() *50);
        const {data} = await axios.get(`${MOVIE_API}movie/${random}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }

        setMovie(data)
    }


    const selectMovie = (movie) => {
        fetchMovie(movie.id)
        setPlaying(false)
        setMovie(movie)
        window.scrollTo(0, 0)
    }

    // const renderMovies = () => (
    //     movies.map(movie => (
    //         <Movie
    //             selectMovie={selectMovie}
    //             key={movie.id}
    //             movie={movie}
    //         />
    //     ))
    // )

    return (
        <div className="gaming-library">
        <div className="col-lg-12 h-12" style={{height:"100vh"}}>
            <div className="heading-section">
                <h4><em>Random Movie</em> Trailer</h4>
            </div>
        <div className="App" >
            {movies.length ?
                <main>
                    {movie ?
                        <div className="poster"
                             style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})`,height:'80vh'}}>
                            {playing ?
                                <>
                                    <Youtube
                                        videoId={trailer.key}
                                        className={"youtube amru"}
                                        containerClassName={"youtube-container amru"}
                                        opts={
                                            {
                                                width: '100%',
                                                height: '100%',
                                                playerVars: {
                                                    autoplay: 1,
                                                    controls: 0,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                            }
                                        }
                                        style={{height:'80vh'}}
                                    />
                                    {/* <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                                    </button> */}
                                </> :
                                <div className="center-max-size">
                                    <div className="poster-content">  
                                    <h1 className="p-3" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))`}}>{movie.title}</h1>
                                        {/* <p>{movie.overview}</p> */}
                                        {trailer ?
                                         <button style={{border:"0px",background:"none"}} className={"button play-video"} onClick={() => setPlaying(true)}
                                                    type="button">
                                                    <i class="fa-brands fa-youtube" style={{fontSize:"7rem",color:"red",position:"relative",top:"15vh",left:"33vw" }}></i>

                                                    </button>
                                            : 'Sorry, no trailer available'}
                                      
                                    </div>
                                </div>
                            }
                        </div>
                        : null}

                </main>
                : 'Sorry, no movies found'}
        </div>
        </div>
        </div>
    );
}

export default RandomTrailer;