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
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <>
        
        {!movieDetails && <h1> Cargando... </h1> }

        {movieDetails && 
        <>
        <div className="container">
            
                <div className="title-image d-flex flex-column">
                <h1 className="mb-5 text-center">
                  {movieDetails.title}
                </h1>
                <img className="image-detail" src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}  />
                </div>

                <div className="description-genres d-flex justify-content-center align-items-center  flex-column">
                    <p className="d-flex">
                        {movieDetails.overview}
                    </p>
                   <h2>
                       genres:
                   </h2>
                   <ul>
                       {movieDetails.genres ? 
                       movieDetails.genres.map(x => <li> {x.name} </li>)
                       :
                       null}
                   </ul>
                </div>
             
       
            </div>

        </>}
            
        </>
    )
}

export default MovieDetail;