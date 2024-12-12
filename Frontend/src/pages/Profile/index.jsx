import ProfileHeader from '../../components/features/Profile/ProfileHeader';
import Accounts from '../../components/features/Profile/Accounts';
import './index.scss';

const Profile = () => {

    return (
        <div className='profile'>
            <ProfileHeader />
            <Accounts />
        </div>
    )
}

export default Profile;