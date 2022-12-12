import * as React from 'react';
import { TextField } from '../../Core/Core01/Components';
import { IScreenProps } from '../Account';

export interface IProfileProps extends IScreenProps {
    userKey: string;
};

export function Profile(props: IProfileProps) {
    return (
        <div>
            <TextField options={{ label: "First Name", }} id={"OODAccountFirstName"} /><br />
            <TextField options={{ label: "Last Name", }} id={"OODAccountLastName"} /><br />
            <TextField options={{ label: "Email", }} id={"OODAccountEmail"} />
        </div>
    );
}