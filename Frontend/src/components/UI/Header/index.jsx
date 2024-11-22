import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { clearToken } from '../../../redux/slices/authSlice';
import Logo from '../../../assets/argentBankLogo.png';
import './index.scss';

const Header = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);

    const handleLogout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        dispatch(clearToken());
    };


    return (
        <nav className='header'>
            <NavLink to='/' className='header-logo'>
                <img className='logo' src={Logo} />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
            {!token ? ( 
                <NavLink to='/login' className='login-wrapper'>
                    <FontAwesomeIcon icon={faCircleUser} />
                    Sign In
                </NavLink> 
            ) : (
                <div className='logout'>
                    <NavLink to={location.pathname} className='logout-wrapper'>
                        <FontAwesomeIcon icon={faCircleUser} />
                        tony
                    </NavLink>
                    <NavLink to='/' className='logout-wrapper' onClick={handleLogout}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Sign Out
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Header;