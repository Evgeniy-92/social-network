import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreater, apdateNewPostTextActionCreater} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let postElement = props.posts.posts.map(p => <Post message={p.message} count={p.likesCount}/>)

    let newPostRef = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreater())
    };

    let onPostChenge = () => {
        let text = newPostRef.current.value
        props.dispatch(apdateNewPostTextActionCreater(text))
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostRef} onChange={onPostChenge} value={props.posts.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
			</div>
            { postElement }
        </div >
    );
}

export default MyPosts;