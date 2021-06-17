import React from 'react';
import classes from './Dialogs.module.css';
import DialogsInfo from './DialogsInfo/DialogsInfo';
import Message from './Message/Message';
import {addMessageActionCreater, updateNewMessageTextActionCreator} from "../../redux/dialods-reducer";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogsInfo name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElement = props.state.messages.map(m => <Message myMessage={m.myMessage}
                                                                 friendsMessage={m.friendsMessage}/>)


    let addMessage = () => {
        props.dispatch(addMessageActionCreater());
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesElements}>
                    {messagesElement}
                </div>

                <div className={classes.newMessage}>
                    <textarea onChange={onMessageChange}
                              value={props.state.newMessageText}
                              placeholder='Enter your message'></textarea>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;