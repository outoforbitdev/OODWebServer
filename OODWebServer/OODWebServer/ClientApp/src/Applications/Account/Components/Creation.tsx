﻿import * as React from 'react';
import { Screens } from '../Account';
import { Button } from '../../Core/Core01/Components/Button';
import { Link } from '../../Core/Core01/Components/Link';
import { Modal } from '../../Core/Core01/Components/Modal';
import { PasswordField } from '../../Core/Core01/Components/PasswordField';
import { TextField } from '../../Core/Core01/Components/TextField';
import { ILoginProps } from './Login';

export function Creation(props: ILoginProps) {
    return (
        <Modal>
            <label>Email</label>
            <div><TextField clearable id="OODAccountEmail" /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField showable id="OODAccountPassword" /></div>
            <label>Confirm Password</label>
            <div><PasswordField showable id="OODAccountPasswordConfimation" /></div>
            <Button text={"Create Account"}
                width={"100%"}
            /><br />
            <Link onClick={() => props.changeScreen(Screens.Login)}>
                I have an existing account
            </Link>
        </Modal>
    );
}