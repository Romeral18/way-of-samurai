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

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogsItem name='Daniil' id='1'/>
                <DialogsItem name='Daniil' id='2'/>
                <DialogsItem name='Daniil' id='3'/>
                <DialogsItem name='Daniil' id='4'/>
                <DialogsItem name='Daniil' id='5'/>
                <div className={cl.dialog}>
                    <NavLink to='/messages/2'>Dima</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to='/messages/3'>Daniel</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to='/messages/4'>Ivan</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to='/messages/5'>Arseniy</NavLink>
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>
                    Hello!
                </div>
                <div className={cl.message}>
                    How are you?
                </div>
                <div className={cl.message}>
                    I am nice!
                </div>

            </div>
        </div>
    );

};

export default Dialogs;