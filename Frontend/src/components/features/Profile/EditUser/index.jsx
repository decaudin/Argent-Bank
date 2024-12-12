import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useUpdateUserData } from '../../../../utils/hooks/User/PUT';
import { handleChange } from '../../../../utils/function/handleChange';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import { ErrorMessage } from '../../../ui/ErrorMessage';
import '../../../../utils/style/loader.scss';
import './index.scss';

const EditUser = ({ initialFirstName, initialLastName, setIsEditing }) => {

    const { updateUserData, isLoading, isError } = useUpdateUserData('http://localhost:3001/api/v1/user/profile');
    const [formData, setFormData] = useState({ firstName: '', lastName: '' })
    const token = useSelector((state) => state.auth.token);

    const handleEditNameSubmit = async (e) => {
        e.preventDefault();
        const result = await updateUserData(token, formData);
        if (result.error) return;
        localStorage.setItem('user', JSON.stringify({ firstName: result.body.firstName, lastName: result.body.lastName }));
        handleStopEditing();
    }

    const handleStopEditing = () => {
        setIsEditing(false)
    }

    return (
        <form className='edit-name-wrapper' onSubmit={handleEditNameSubmit}>
            <div className='edit-input-wrapper'>
                <Input className='input-user' label='First Name' type='text' id='firstname' name='firstName' value={formData.firstName} onChange={handleChange(setFormData)} placeholder={initialFirstName} required />
                <Input className='input-user' label='Last Name' type='text' id='lastname' name='lastName' value={formData.lastName} onChange={handleChange(setFormData)} placeholder={initialLastName} required />
            </div>
            <div className='edit-button-wrapper'>
                <Button className='choice' type='submit'>Save</Button>
                <Button className='choice' type='button' onClick={handleStopEditing}>Cancel</Button>
            </div>
            {isLoading && <div className='loader'></div>}
            {isError && <ErrorMessage>Erreur lors de la modification de vos nom/prénom.</ErrorMessage>}
        </form>
    )
}

EditUser.propTypes = {
    initialFirstName: PropTypes.string.isRequired,
    initialLastName: PropTypes.string.isRequired,
    setIsEditing: PropTypes.func.isRequired,
}

export default EditUser;