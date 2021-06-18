const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Евгений', avatar: 'https://klike.net/uploads/posts/2018-06/1528369826_8.jpg'},
        {id: 2, name: 'Карина', avatar: 'https://storge.pic2.me/c/1360x800/255/5950ca24936ad.jpg'},
        {
            id: 3,
            name: 'Владислав',
            avatar: 'https://bipbap.ru/wp-content/uploads/2018/03/03-3-700x637-640x582.jpg'
        },
        {
            id: 4,
            name: 'Кристина',
            avatar: 'https://sun9-62.userapi.com/s/v1/if2/50lIu4rIfmF1NiEphigh76TPVjLeVMDAIvE0FFBQEXfHZatbVneS58p_EWgLMQA30hFG4asJM81riYU3ZxrcINUd.jpg?size=200x0&quality=96&crop=20,20,360,564&ava=1'
        },
        {
            id: 5,
            name: 'Сергей',
            avatar: 'https://prikolnye-kartinki.ru/img/picture/Nov/23/33d65d8136701dfdba252c873e38de9d/1.jpg'
        },
        {
            id: 6,
            name: 'Татьяна',
            avatar: 'https://i.pinimg.com/originals/54/13/e2/5413e250d1eecb821fc49c3213d7d661.jpg'
        },
        {
            id: 7,
            name: 'Дмитрий',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6C1rS1qYf8Z6en9SWnpaIOarrDPK_G66T0Q&usqp=CAU'
        },
    ],
    messages: [
        {id: 1, myMessage: 'Привет'},
        {id: 2, friendsMessage: 'Привет'},
        {id: 3, myMessage: 'Как твои дела?'},
        {id: 4, friendsMessage: 'Хорошо'},
        {id: 5, friendsMessage: 'А твои?'},
        {id: 6, myMessage: 'Мои отлично?'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                myMessage: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state
    }

}

export const addMessageActionCreater = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer