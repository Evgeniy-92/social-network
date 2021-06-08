import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://cs16planet.ru/steam-avatars/images/avatar1833.jpg" alt="" />
            {props.message}
            <div>
                <span>Like {props.count}</span>
            </div>
		</div>
    );
}

export default Post;