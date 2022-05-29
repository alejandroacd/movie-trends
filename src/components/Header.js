import '../components/Header.css'
import { Link } from 'react-router-dom'
import { BsListStars } from 'react-icons/bs'
import { BiStar } from 'react-icons/bi'
import { BiCameraMovie } from 'react-icons/bi'

const Header = (props) => {
    return (
        <header className='container-header'>
            <div className='header_info'>
            <Link to="/"> 
            <h2 className='logo'> <BiCameraMovie /> MovieTrends  </h2>
            </Link>
           
            <nav className='list-container d-none d-lg-flex'>
                <ul>
                
                    <Link className="text-white favorites-link" style={{textDecoration: 'none'}}  to="/favorites">
                    <li>
                        Favorites  <BiStar /> {props.cart.length}
                    </li>
                    </Link>
                </ul>

                
            </nav>
      

            </div>
            <Link className='favorites-link' to="/favorites">
            <BsListStars size={20} className='small-favorites d-flex d-lg-none'/>
            </Link>
        </header>
    )
}

export default Header