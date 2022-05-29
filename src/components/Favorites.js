import { useEffect } from "react";
import {BsSuitHeartFill} from 'react-icons/bs'

const Favorites = (props) => {

    useEffect(() => {
        console.log(localStorage.getItem('cart'))
    },[])


    return (
        <>

        {props.cart.length === 0 && null}
        {props.cart.length > 0 && 


     <>

<h3 className="text-center p-5 font-weight-bold">Favorites</h3>
        
        {props.cart.map((x,y) => {
            return (
                <div key={y} className="card border-0 d-flex flex-lg-row flex-md-row flex-sm-column">
                <img  src={`https://image.tmdb.org/t/p/w500/${x.image}`} className="favorite-image" alt="..." />
                <div className="card-body">
                <h5 className="card-title"> {x.name} </h5>
                <p className="card-text"> {x.description} </p>
                <button className="btn btn-outline-danger mt-5" onClick={() => props.handleChange(x)}> Eliminar </button>
        
             </div>
           </div>
           
            )
            
        })
    }
        </>
        
        }

       
        
        </>
      
    )
}

export default Favorites;