import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../UI/Input';
import { useLogin } from '../../utils/hooks/Login';
import { handleChange } from '../../utils/function/handleChange';
import './index.scss';

const LoginInput = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const { loginUser, isError, isLoading } = useLogin('http://locahost:3001/user/login')

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await loginUser(formData);
        if (result.success) {
            navigate('/profile');
        }
    }

    return (  
            <form className='login-form' onSubmit={handleLogin}>
                <FontAwesomeIcon icon={faCircleUser} />
                <h1 className='input-title'>Sign In</h1>
                <Input className='input-wrapper' label='Username' type='email' id='email' name='email' value={formData.email} onChange={handleChange(setFormData)} autoComplete='username'/>
                <Input className='input-wrapper' label='Password' type='password' id='password' name='password' value={formData.password} onChange={handleChange(setFormData)} autoComplete='current-password'/>
                <Input className='checkbow-wrapper' label='Remember me' type='checkbox' id='checkbox' name='checkbox' value="" onChange={() => {}} />
                <input className='input-submit' type='submit' value='Sign In' />
                {isLoading && <p>Chargement ...</p>}
                {isError && <p>Paire identifiant/mot de passe incorrecte.</p>}
            </form>
    )
}

export default LoginInput;