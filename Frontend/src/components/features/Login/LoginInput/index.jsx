import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useLogin } from '../../../../utils/hooks/auth/Login';
import { useUserData } from '../../../../utils/hooks/user/POST';
import { usePasswordToggle } from '../../../../utils/hooks/auth/PasswordToggle';
import { handleChange } from '../../../../utils/function/handleChange';
import Input from '../../../ui/Input';
import { EyeToggle } from '../../../ui/EyeToggle';
import { ErrorMessage } from '../../../ui/ErrorMessage';
import '../../../../utils/style/loader.scss';
import './index.scss';

const LoginInput = () => {

    const { loginUser, isError, isNetworkError, isLoading } = useLogin('http://localhost:3001/api/v1/user/login');
    const { fetchData, isDataError, isDataLoading } = useUserData('http://localhost:3001/api/v1/user/profile');
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordToggle();
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isRememberMe, setIsRememberMe] = useState(false);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await loginUser(formData);
        const token = result.data.body.token;
        const data = await fetchData(token);
        if (result.success && data) {
            if (isRememberMe) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify({ firstName: data.body.firstName, lastName: data.body.lastName }));
            } else {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('user', JSON.stringify({ firstName: data.body.firstName, lastName: data.body.lastName }));
            }
            navigate('/profile');
        }
    }

    return (
        <form className='login-form' onSubmit={handleLogin}>
            <FontAwesomeIcon icon={faCircleUser} />
            <h1 className='input-title'>Sign In</h1>
            <Input className='input-wrapper' label='Username' type='email' id='email' name='email' value={formData.email} onChange={handleChange(setFormData)} autoComplete='username' />
            <Input className='input-wrapper' label='Password' type={isPasswordVisible ? 'text' : 'password'} id='password' name='password' value={formData.password} onChange={handleChange(setFormData)} autoComplete='current-password' />
            <EyeToggle isVisible={isPasswordVisible} onToggle={togglePasswordVisibility} />
            <Input className='checkbow-wrapper' label='Remember me' type='checkbox' id='checkbox' name='checkbox' value='' checked={isRememberMe} onChange={(e) => setIsRememberMe(e.target.checked)} />
            <input className='input-submit' type='submit' value='Sign In' />
            {(isLoading || isDataLoading) && <div className='loader'></div>}
            {isError && <ErrorMessage>Paire identifiant/mot de passe incorrecte.</ErrorMessage>}
            {isNetworkError && <ErrorMessage>Une erreur interne s&apos;est produite lors de votre tentative de connexion. Veuillez réessayer plus tard.</ErrorMessage>}
            {isDataError && <ErrorMessage>Erreur lors du chargement de vos données.</ErrorMessage>}
        </form>
    )
}

export default LoginInput;