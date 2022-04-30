import React from "react";
import s from './Mypost.module.css';
import Post from "./Post/Post";

const Mypost = (props) => {

    let postContent = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        // props.updateNewPostText('');
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My Post</h3>
            <div>
                <textarea
                    onChange={onChangePost}
                    ref={newPostElement}
                    value={props.newPostText}
                />
            </div>

            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postContent}
            </div>
        </div>
    )
}

export default Mypost;