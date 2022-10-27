import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { movieShow, movieUpdate, movieDelete } from '../api/movie'
import UpdateMovie from './UpdateMovie'
import { useNavigate } from "react-router-dom";


const ShowMovie = ({ user, msgAlert }) => {

    const [movie, setMovie] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const navigate = useNavigate();

    const { id } = useParams()

    useEffect(() => {
        movieShow(user, id)
        .then((res) => {
            setMovie(res.data.movie)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Movie Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        setMovie({...movie, [event.target.name]: event.target.value})
    }

    const handleUpdateMovie = () => {
        movieUpdate(movie, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Updating Movie',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Movie Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteMovie = () => {
        movieDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting Movie',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Movie Failure' + error,
                variant: 'danger'
            })
        })
    }

    if(deleted) navigate('/movies')

    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true

    return (
			<>
				<h3>Title: {movie.title}</h3>
				<p>Genre: {movie.genre}</p>
				<button onClick={toggleShowUpdate}>Toggle Update</button>
				{isUpdateShown && (
					<UpdateMovie
						movie={movie}
						handleChange={handleChange}
						handleUpdateMovie={handleUpdateMovie}
					/>
				)}
                <button onClick={handleDeleteMovie}>Delete Movie</button>
			</>
		)
}

export default ShowMovie