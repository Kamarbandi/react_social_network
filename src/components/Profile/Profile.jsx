import c from './Profile.module.css';
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Mypost
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;