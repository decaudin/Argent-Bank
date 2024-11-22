import { NavLink } from 'react-router-dom';
import "./index.scss";

const NotFound = () => {
  
  return (
    <div className='error'>
      <h1 className='error-title'>404</h1>
      <p className='error-subtitle'>Oups ... </p>
      <p className='error-text'>Il semblerait que la page que vous cherchez n&#39;existe pas.</p>
      <NavLink to='/' className='error-link'>
        Retourner sur la page d&#39;accueil
      </NavLink>
    </div>
  );
};

export default NotFound;