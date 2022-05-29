import { Link } from 'react-router-dom'
import { BsSuitHeartFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'


const LeagueCard = (props) => {

  let local = localStorage.getItem('cart')
  const cardId = props.id;
  const cartInProps = props.cart;
  const [pinned, setPinned] = useState();
  let isInFavorites = cartInProps.find(x => x.id === cardId)


     useEffect(() => {
        if(!isInFavorites){
          setPinned(false)
        } if (isInFavorites){
          setPinned(true)
        }
     }, [pinned,local, props.handleChanger])

  return (
    <>
      <div className="card mt-5">
        <div className='heart-icon-div' onClick={() => props.handleChanger(props)} data-movie-id={props.id} >
          <BsSuitHeartFill style={{color: pinned ? 'red' : 'white' }}  size={20} />
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title font-weight-bold"> {props.name.substring(0, 20)}... </h5>
          <p className="card-text">  {props.description.substring(0, 100)} ... </p>
          <Link to={`/movies/?id=${props.id}`} className='btn btn-dark pt-2 pb-1 p-2 font-weight-bold' > See details </Link>
        </div>
      </div>
    </>
  )
}

export default LeagueCard