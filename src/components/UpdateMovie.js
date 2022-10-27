import React from 'react'

const UpdateMovie = ({ movie, handleChange, handleMovieUpdate }) => {
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
            <button onClick={handleMovieUpdate}>Update Movie</button>
        </>
    )
}

export default UpdateMovie