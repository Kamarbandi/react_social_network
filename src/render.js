import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                dialogs={state.dialogsPage.dialogsData}
                messages={state.dialogsPage.messages}
                newPostText={state.profilePage.newPostText}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}