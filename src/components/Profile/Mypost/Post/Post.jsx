import c from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={c.item}>
                <img
                    src='https://a2.tvspielfilm.de/imedia/0566/9470566,NJp4uQ2eK7JDLfajOVPAp_K0EdfK0zwEDS_vOnmubYCm5J7VXMnIHPhOmA1Jk5P4Dr_2uIlyAJILr1EHGoSLoA==.jpg'/>
                {props.message}

                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;