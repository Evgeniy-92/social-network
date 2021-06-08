import React from 'react';
import classes from './Dialogs.module.css';
import DialogsInfo from './DialogsInfo/DialogsInfo';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogsInfo name={d.name} id={d.id} avatar={d.avatar} />)
    let messagesElement = props.state.messages.map(m =>  <Message myMessage={m.myMessage} friendsMessage={m.friendsMessage}/>)

    let newMessageRef = React.createRef();

    let addMessage = () => {
        props.addMessage()
    };

    let onMessageChange = () => {
        let text = newMessageRef.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogsElement }
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesElements}>
                    { messagesElement }
                </div>
                
                <div className={classes.newMessage}>
                    <textarea ref={newMessageRef} onChange={onMessageChange} value={props.state.newMessageText}></textarea>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;