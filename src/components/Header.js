import '../components/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='container-header'>
            <div className='header_info'>
            <Link to="/"> 
            <h2 className='logo'> MovieTrends </h2>
            </Link>
           
            <nav className='list-container'>
                <ul>
                 
                    <Link style={{textDecoration: 'none'}}  to="/favorites">
                    <li>
                        Favorites
                    </li>
                    </Link>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header