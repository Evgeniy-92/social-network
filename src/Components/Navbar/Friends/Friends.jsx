import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const Friends = (props) => {
    let friendElement = props.friends.friends.map( f => <Friend name={f.name} avatar={f.avatar}/>)
    return (
        <div className={classes.friends}>
            <h2>Friends</h2>
            <div className={classes.friendsBlock}>
                { friendElement }
            </div>
        </div>
    );
}

export default Friends;