import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useLogin } from '../../../../utils/hooks/Login';
import { usePasswordToggle } from '../../../../utils/hooks/PasswordToggle';
import { handleChange } from '../../../../utils/function/handleChange';
import Input from '../../../ui/Input';
import { EyeToggle } from '../../../ui/EyeToggle';
import './index.scss';

const LoginInput = () => {

    const { loginUser, isError, isLoading } = useLogin('http://localhost:3001/api/v1/user/login')
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordToggle();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await loginUser(formData);
        if (result.success) {
            const token = result.data.body.token;
            if (rememberMe) {
                localStorage.setItem('token', token);
            } else {
                sessionStorage.setItem('token', token);
            }
            // appeler ici pour infos utilisateurs
            navigate('/profile');
        }
    }

    return (
        <form className='login-form' onSubmit={handleLogin}>
            <FontAwesomeIcon icon={faCircleUser} />
            <h1 className='input-title'>Sign In</h1>
            <Input className='input-wrapper' label='Username' type='email' id='email' name='email' value={formData.email} onChange={handleChange(setFormData)} autoComplete='username'/>
            <Input className='input-wrapper' label='Password' type={isPasswordVisible ? 'text' : 'password'} id='password' name='password' value={formData.password} onChange={handleChange(setFormData)} autoComplete='current-password'/>
            <EyeToggle isVisible={isPasswordVisible} onToggle={togglePasswordVisibility} />
            <Input className='checkbow-wrapper' label='Remember me' type='checkbox' id='checkbox' name='checkbox' value="" onChange={(e) => setRememberMe(e.target.checked)} />
            <input className='input-submit' type='submit' value='Sign In' />
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Paire identifiant/mot de passe incorrecte.</p>}
        </form>
    )
}

export default LoginInput;