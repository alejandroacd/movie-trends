import React, {useRef,useState,useEffect} from 'react'
import axios from 'axios'
import LeagueCard  from './LeagueCard'

const Login = (props) => {

  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const inputRef = useRef()



  const handleSearch = () => {
    
    setSearch(inputRef.current.value)
  }

  useEffect(() => {
    console.log(props)
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res =>{
      setMovies(res.data.results)
      console.log(res.data.results)
      setLoading(false)
    }
      )
    .catch(e => console.log(e))

  },[])

  const finalValues =  movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))

  return (
  <>

  {loading && <h3 className='text-center text-body d-flex justify-content-center align-items-center' style={{height:'50vh'}}> Cargando info... </h3> }
  {movies && 
  <>
  <div>
    <form>
      <input type='text' ref={inputRef} placeholder="Buscar película" onChange={() => handleSearch()} autoFocus/>
  
    </form>
  </div>

<div className='league-container'>
{finalValues.map((x,y) => {
    return (
      <div className='col-3' key={y}>
         <LeagueCard name={x.title} description={x.overview} image={x.backdrop_path} id={x.id} cart={props.cart} handleChanger={props.handleChange} />
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