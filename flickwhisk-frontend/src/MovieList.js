import React, {useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () =>  {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/movies')
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the movies!", error);
        });
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title} ({movie.releaseYear})</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;