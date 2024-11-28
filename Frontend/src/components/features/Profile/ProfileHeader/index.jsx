import { useSelector } from 'react-redux';
import './index.scss';

const ProfileHeader = () => {

    const { firstName, lastName } = useSelector((state) => state.user);

    return (
        <>
            <h1 className='profile-title'>Welcome Back<br />{firstName} {lastName}</h1>
            <button className='edit'>Edit Name</button>
        </>
    )
}

export default ProfileHeader;