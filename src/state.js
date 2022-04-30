import {renderEntireTree} from "./render";

let state = {
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Murshid"},
            {id: 2, name: "Oktay"},
            {id: 3, name: "Murad"},
            {id: 4, name: "Reyal"},
            {id: 5, name: "Samir"},
        ],

        messages: [
            {id: 1, message: 'How is yout PHP?'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Yes'},
            {id: 4, message: 'Hello World'},
            {id: 5, message: 'Yoo'},
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 25},
            {id: 3, message: 'Hello World', likesCount: 200},
        ],
        newPostText: 'Hello Azad Kamarbandi',
    }
}

export let addPost = (message) => {
    let newPost = {
        id: 4,
        message: message,
        likesCount: 200
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export let onChangeText = () => {

}

export default state;