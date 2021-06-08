import classes from './Message.module.css';



const Message = (props) => {
    return (
        <div className={classes.messageBlock}>
            <div className={classes.myMessage}>
                <div className={classes.messageEl}>{props.myMessage}</div>
            </div>
            <div className={classes.friendsMessage}>
                <div className={classes.messageEl}>{props.friendsMessage}</div>
            </div>
        </div>

    )
}

export default Message;