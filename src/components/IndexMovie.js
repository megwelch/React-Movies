import React, { useEffect, useState } from 'react' 
import { Link} from 'react-router-dom'
import { movieIndex } from '../api/movie'

const IndexMovie = ({ user, msgAlert }) => {

    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        movieIndex(user)
        .then(res => {
            setAllMovies(res.data.movies)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Movies Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allMoviesJSX = allMovies.map(movie => {
        return (
            <Link to={movie._id}>
            <li key={movie._id}>Title: {movie.title} Genre: {movie.genre}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allMoviesJSX}</ul>
        </>
    )
}

export default IndexMovie