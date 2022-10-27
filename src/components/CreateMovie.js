import React, {useState} from 'react'
import { movieCreate } from '../api/movie'
import { useNavigate } from "react-router-dom";

const CreateMovie = ({ user, msgAlert }) => {
    const defaultMovie = {
        title: '',
        genre: ''
    }
   
const [movie, setMovie] = useState(defaultMovie)
const navigate = useNavigate();

const handleChange = (event) => {
    // to keep the values as users input into info
    // first spread the current movie
    // then comma and modify the key to the value you need
    console.log('this is event.target.name', event.target.name)
    setMovie({...movie, [event.target.name]: event.target.value})
}

const handleCreateMovie = () => {
    movieCreate(movie, user)
    .then(() => {
        msgAlert({
            heading: 'Success',
            message: 'Created Movie',
            variant: 'success'
        })
        navigate('/movies')
    })
    .catch((error) => {
        msgAlert({
            heading: 'Failure',
            message: 'Create Movie Failure' + error,
            variant: 'danger'
        })
    })
}

    return (
        <>
            <input 
                type = 'text'
                value = {movie.title}
                name = 'title'
                onChange = {handleChange}
            />
            <input 
                type = 'text'
                value = {movie.genre}
                name = 'genre'
                onChange = {handleChange}
            />
            <button onClick={handleCreateMovie}>Create Movie</button>
        </>
    )
}

export default CreateMovie