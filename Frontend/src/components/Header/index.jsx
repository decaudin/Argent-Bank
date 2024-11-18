import Logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import './index.scss';

const Header = () => {

    return (
        <nav className='header'>
            <NavLink to='/' className='header-logo'>
                <img className='logo' src={Logo} />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
            <div>
            <NavLink to='/login' className='login-wrapper'>
                <FontAwesomeIcon icon={faCircleUser} />
                Sign In
            </NavLink>
            </div>
        </nav>
    )
}

export default Header;