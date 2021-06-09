let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Я учу React', likesCount: 20},
                {id: 2, message: 'Ура', likesCount: 12},
                {id: 3, message: 'Привет мир!!!', likesCount: 5},
            ],
            newPostText: ''
        },

        dialogsPage: {
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

        },

        sidebur: {
            friends: [
                {
                    id: 1,
                    name: 'Андрей',
                    avatar: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg'
                },
                {
                    id: 2,
                    name: 'Света',
                    avatar: 'https://tipik.ru/wp-content/uploads/2021/02/%D0%9E%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D1%82%D1%81%D0%B0%D0%BF%D0%B0-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-9.jpeg'
                },
                {
                    id: 3,
                    name: 'Саша',
                    avatar: 'https://drasler.ru/wp-content/uploads/2019/08/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-024.jpg'
                },
            ]
        }

    },
    callSubscriber() {
        console.log("state")
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.callSubscriber(this._state)
    },
    addMessage() {
        let newMessage = {
            id: 7,
            myMessage: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this.callSubscriber(this._state)
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this.callSubscriber(this._state)
    },
    subscribe(observer) {
        this.callSubscriber = observer
    },
}


window.store = store;
export default store;