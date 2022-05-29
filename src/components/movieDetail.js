import axios from "axios";
import { useEffect, useState } from "react";


const MovieDetail = () => {
    let queryString = window.location.search
    let decoded = new URLSearchParams(queryString)
    let value = decoded.get('id')
    const [movieDetails,setMovieDetails] = useState({})

    console.log(value)



    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${value}?api_key=675fd4fbd8ad300309a50cc95ffc2b27`)
            .then(res => {
                console.log(res.data)
                setMovieDetails(res.data)
                console.log(res.data.genres)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <>
        
        {!movieDetails && <h1> Cargando... </h1> }

        {movieDetails && 
        
        <div className="movie-details">
            <h3 className="title-movie"> {movieDetails.title} </h3>

            <div className="row information">
                <img className="col-sm-12 col-md-6 col-lg-6 detail-image"src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} />
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column">
               
               
                <p className="font-weight-bold mt-4"> Description: </p>
                <p> {movieDetails.overview} </p>
                <p className="font-weight-bold"> IMDB Rate: </p>
                <p> {movieDetails.vote_average} </p>
                <p className="font-weight-bold">Homepage: </p> 
                <a href={movieDetails.homepage}> {movieDetails.homepage} </a>
                <br/>
                <p className="font-weight-bold genres"> Genres: <br/>
               
                {movieDetails.genres ? movieDetails.genres.map(x => {
                        return (
                            <div className="btn btn-info m-1"> {x.name}</div>
                        )
                    }) : null }
            
                 </p> 
                </div>
            </div>
        </div>

        }
            
        </>
    )
}

export default MovieDetail;