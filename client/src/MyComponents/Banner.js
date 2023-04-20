import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import "./Banner.css";
import requests from "../requests";
import axios from "../axios";


export const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie (
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();

    }, []);

    return (
        <>
            <header className="banner-image"
            style  = {{ 
                backgroundSize:"cover",
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center",
            }}>

            
                <div className="banner-content">
                    <h4>{movie?.title || movie?.name || movie?.original_name}</h4>
                </div>


                <div className="banner-description">
                    <h6>{movie?.overview}</h6>
                </div>
                

                <div className="banner-options">

                    <div className="banner-play-option">
                        <Button variant="light">Play</Button>
                    </div>

                    <div className="banner-moreinfo-option">
                        <Button variant="secondary">More Info</Button>
                    </div>

                </div>

            </header>

            </>

    )
}