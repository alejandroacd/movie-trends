import React, {useRef,useState,useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const Login = (props) => {

  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const inputRef = useRef()

  const handleSearch = () => {
    
    setSearch(inputRef.current.value)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=675fd4fbd8ad300309a50cc95ffc2b27`)
    .then(res =>{
      setMovies(res.data.results)
      console.log(res.data.results)
      setLoading(false)
    }
      )
    .catch(e => console.log(e))

  },[])

  const finalValues = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))

  return (
  <>

  {loading && <h3 className='text-center text-body d-flex justify-content-center align-items-center' style={{height:'50vh'}}> Cargando info... </h3> }
  {movies && 
  <>
  <div>
    <form>
      <input type='text' className='input-search' ref={inputRef} placeholder="Search a movie..." onChange={() => handleSearch()} autoFocus/>
    </form>
  </div>

<div className='league-container'>
{finalValues.map((x,y) => {
    return (
      <div className="col-sm-12 col-lg-3 col-xs-12" key={y}>
         <MovieCard  name={x.title} description={x.overview} image={x.backdrop_path} id={x.id} cart={props.cart} handleChanger={props.handleChange} />
      </div>
     
    )
  })}

</div>

  </>

  
  }
  
  </>
  );
};

        
    

export default Login;   