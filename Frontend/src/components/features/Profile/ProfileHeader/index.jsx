import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useAuthRedirect } from '../../../../utils/hooks/auth/Redirection';
import Button from '../../../ui/Button';
import EditUser from '../EditUser';
import './index.scss';


const ProfileHeader = () => {

    useAuthRedirect();
    const { firstName, lastName } = useSelector((state) => state.user);
    const [ isEditing, setIsEditing ] = useState(false);

    const handleStartEditing = () => {
        setIsEditing(true)
    }

    return (
        <>
            <h1 className='profile-title'>Welcome Back<br />{!isEditing ? `${firstName} ${lastName}` : ''}</h1>
            {!isEditing ? (
                <Button className='edit' onClick={handleStartEditing}>Edit Name</Button> 
            ) : (
                <EditUser initialFirstName={firstName} initialLastName={lastName} setIsEditing={setIsEditing} />
            )} 
        </>
    )
}

export default ProfileHeader;