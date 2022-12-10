import React from 'react'
import { useSelector } from 'react-redux'
import SingleMovie from './SingleMovie'

function MoviesDashboard() {
    const { movies } = useSelector(state => state.movies)
    console.log(movies)
    return (
        <>
            <div className="content-wrapper container">
                <div className="page-content">
                    <table className="table table-striped table-dark mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">edit</th>
                                <th scope="col">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                               <SingleMovie key={movie.id} {...movie} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default MoviesDashboard