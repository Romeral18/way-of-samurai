import React from 'react'
import cl from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogsItem = (props) => {
    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Messages = (props) => {
    return (
        <div className={cl.message}>
            {props.message}
        </div>
    )
}

const dialogsData = [
    {id: 1, name: 'Daniil'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Daniel'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Arseniy'}
];

const messagesData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am nice!'},
];

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={cl.messages}>
                <Messages message={messagesData[0].message}/>
                <Messages message={messagesData[1].message}/>
                <Messages message={messagesData[2].message}/>
            </div>
        </div>
    )

}

export default Dialogs