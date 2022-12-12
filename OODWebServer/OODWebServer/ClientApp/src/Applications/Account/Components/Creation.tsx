import * as React from 'react';
import { Button } from '../../Core/Core01/Components/Button';
import { Link } from '../../Core/Core01/Components/Link';
import { PasswordField } from '../../Core/Core01/Components/PasswordField';
import { TextField } from '../../Core/Core01/Components/TextField';
import { Screens } from '../Account';
import { ILoginProps } from './Login';

export function Creation(props: ILoginProps) {
    return (
        <div>
            <label>Email</label>
            <div><TextField options={{ clearable: true, }} id="OODAccountEmail" /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField options={{ showable: true }} id="OODAccountPassword" /></div>
            <label>Confirm Password</label>
            <div><PasswordField options={{ showable: true }} id="OODAccountPasswordConfimation" /></div>
            <Button text={"Create Account"}
                width={"100%"}
            /><br />
            <Link onClick={() => props.changeScreen(Screens.Login)}>
                I have an existing account
            </Link>
        </div>
    );
}