import { Link } from 'react-router-dom';
import './MainNavigation.css'
import cartImage from './../assets/cart.svg';
import homeImage from './../assets/home.svg';

//The navigation happens here
const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul className='ul_nav'>
                    <li className='li_nav'>
                        <Link to="/">
                            <img src={homeImage}></img>
                        </Link>
                    </li>
                    <li className='li_nav_about'>
                        <Link to="/cart">
                            <img src={cartImage}></img>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default MainNavigation;