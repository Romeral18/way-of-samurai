import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom";

const links = [
    {href: '/profile', name: 'profile'},
    {href: '/dialogs', name: 'dialogs'},
    {href: '/news', name: 'news'},
    {href: '/settings', name: 'settings'},
]
const posts = [
    {message: "Hi, how are you?", likes: "15"},
    {message: "Let's go dance!", likes: "1000"},
    {message: "Let's go dance!", likes: "1000"},
    {message: "Let's go dance!", likes: "1000"},
    {message: "Let's go dance!", likes: "1000"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App links={links} posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
