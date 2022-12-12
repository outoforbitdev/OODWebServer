import * as React from 'react';
import { useState } from 'react';
import { Button, Link, TextField } from '../../Core/Core01/Components';
import { PasswordField } from '../../Core/Core01/Components/PasswordField';
import { IScreenProps, Screens } from '../Account';

export interface ILoginProps extends IScreenProps {
    setUserKey: (userKey: string) => void;
}

export function Login(props: ILoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <label>Email</label>
            <div>
                <TextField
                    options={{
                        clearable: true,
                        onValueChange: setUsername,
                    }}
                    id="OODAccountUsername" />
            </div>
            <div><span /></div>
            <label>Password</label>
            <div>
                <PasswordField
                    options={{
                        showable: true,
                        onValueChange: setPassword,
                    }}
                    id="OODAccountPassword" />
            </div>
            <Button text={"Login"}
                width={"100%"}
                onClick={() => TryLogin(username, password, props.setUserKey, props.changeScreen)}
            /><br />
            <Link onClick={() => props.changeScreen(Screens.Create)}>
                Create Account
            </Link>
        </div>
    );
}

function TryLogin(
    username: string,
    password: string,
    setUser: (userKey: string) => void,
    changeScreen: (screen: Screens) => void) {

    setUser(username);
    changeScreen(Screens.Profile);
}