import React, {useState, useEffect} from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";


export const Row = ({title, fetchURL}) => {

    //state is a short term memory used for storing variables and data for a shoirt time
    //useState is a react hook
    const [movies, setMovies] = useState([]);

    useEffect (() => {

        async function fetchData () {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchURL]);

    console.table(movies);

    return (
        <div className="row-main">
            <h4>{title}</h4>

            <div className="row-images">
                {movies.map(movie => (
                    <img className="row-image" src = {`${base_url}${movie.poster_path}`} alt = {movie.name} />
                ))}
            </div>

        </div>
    )
}