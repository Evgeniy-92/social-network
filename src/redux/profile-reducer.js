const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Я учу React', likesCount: 20},
        {id: 2, message: 'Ура', likesCount: 12},
        {id: 3, message: 'Привет мир!!!', likesCount: 5},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state;
    }

}

export const addPostActionCreater = () => ({type: ADD_POST})
export const apdateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer