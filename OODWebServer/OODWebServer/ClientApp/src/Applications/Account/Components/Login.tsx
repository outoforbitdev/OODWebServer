import * as React from 'react';
import { Screens } from '../Account';
import { Button } from '../../Core/Core01/Components/Button';
import { IComponentProps } from '../../Core/Core01/Components/IComponentProps';
import { Link } from '../../Core/Core01/Components/Link';
import { Modal } from '../../Core/Core01/Components/Modal';
import { PasswordField } from '../../Core/Core01/Components/PasswordField';
import { TextField } from '../../Core/Core01/Components/TextField';

export interface ILoginProps extends IComponentProps {
    changeScreen: (screen: Screens) => void;
}

export function Login(props: ILoginProps) {
    return (
        <Modal>
            <label>Username</label>
            <div><TextField clearable /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField showable /></div>
            <Button text={"Login"}
                width={"234px"} 
            /><br />
            <Link onClick={() => props.changeScreen(Screens.Create)}>
                Create Account
            </Link>
        </Modal>
    );
}