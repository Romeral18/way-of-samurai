import React from 'react'
import style from './Dialogs.module.scss'
import DialogsItem from './DialogsItem/Dialogs'
import Messages from './Messages/Messages'




const dialogs = [
    {id: 1, name: 'Daniil'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Daniel'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Arseniy'}
];

const messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am nice!'},
];

const dialogsElements = dialogs.map( d => (<DialogsItem name={d.name} id={d.id}/>));

const messagesElements = messages.map( m => (<Messages message={m.message}/>))

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs