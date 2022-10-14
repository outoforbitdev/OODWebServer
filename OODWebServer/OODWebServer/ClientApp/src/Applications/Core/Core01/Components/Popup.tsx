import * as React from 'react';
import { ReactElement } from 'react';
import '../Styles/Modal.css';
import { Button } from './Button';
import { getClassName, IComponentProps } from './IComponentProps';
import { XRow } from './XRow';

interface IPopupProps extends IComponentProps {
    closable?: boolean;
    accept?: string;
    cancel?: string;
}

export function Popup(props: IPopupProps): ReactElement<IPopupProps> {
    return (
        <dialog open className={getClassName(props.className, "OODCorePopup")}>
            {props.closable ? <XRow /> : null}
            <div className={"OODCoreModalContent"}>
                {props.children ? props.children : null}
            </div>
            <div className={"OODCoreModalButtons"}>
                <div className={"OODCoreModalMargin"}></div>
                <div className={"OODCoreModalButtonsDiv"}>
                    {props.accept ? <Button text={props.accept} /> : null}
                    {props.cancel ? <Button text={props.cancel} /> : null}
                </div>
            </div>
        </dialog>
    );
}