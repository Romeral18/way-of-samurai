import React from "react";
import cl from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    );
};
const Messages = (props) => {
    return (
        <div className={cl.message}>
            {props.message}
        </div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogsItem name='Daniil' id='1'/>
                <DialogsItem name='Dima' id='2'/>
                <DialogsItem name='Daniel' id='3'/>
                <DialogsItem name='Ivan' id='4'/>
                <DialogsItem name='Arseniy' id='5'/>
            </div>
            <div className={cl.messages}>
                <Messages message='Hello!' />
                <Messages message='How are you?' />
                <Messages message='I am nice!' />
            </div>
        </div>
    );

};

export default Dialogs;