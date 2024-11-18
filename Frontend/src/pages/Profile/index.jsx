import ProfileHeader from "../../components/ProfileHeader";
import Accounts from "../../components/Accounts";
import './index.scss';

const Profile = () => {

    return (
        <div className="profile">
            <ProfileHeader />
            <Accounts />
        </div>
    )
}

export default Profile;