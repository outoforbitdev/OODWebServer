import * as React from 'react';
import { Screens } from '../Account';
import { Modal } from '../../Core/Core01/Components/Modal';
import { PasswordField } from '../../Core/Core01/Components/PasswordField';
import { Button, IComponentProps, Link, Popup, TextField } from '../../Core/Core01/Components';

export interface ILoginProps extends IComponentProps {
    changeScreen: (screen: Screens) => void;
}

export function Login(props: ILoginProps) {
    return (
        <Popup>
            <label>Username</label>
            <div><TextField clearable id="OODAccountUsername" /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField showable id="OODAccountPassword" /></div>
            <Button text={"Login"}
                width={"100%"} 
            /><br />
            <Link onClick={() => props.changeScreen(Screens.Create)}>
                Create Account
            </Link>
        </Popup>
    );
}