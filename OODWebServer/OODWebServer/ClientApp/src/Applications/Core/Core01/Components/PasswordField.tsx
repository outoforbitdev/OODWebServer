import * as React from 'react';
import {
    useState
} from 'react';
import '../Styles/Input.css';
import { Button } from './Button';
import { defaultValidator, IInputOptions, IInputProps, InputSpan, onBlur, onKeyDown, onValueChange } from './InputField';

interface IPasswordFieldOptions extends IInputOptions<string> {
    showable?: boolean;
}

interface IPasswordFieldProps extends IInputProps<string> {
    options?: IPasswordFieldOptions;
}

export function PasswordField(props: IPasswordFieldProps): JSX.Element {
    let options = props.options ?? {};
    const onQuickValidate = options.onQuickValidate ?
        options.onQuickValidate : defaultValidator;
    const onFullValidate = options.onFullValidate ?
        options.onFullValidate : defaultValidator;
    const onChange = options.onValueChange ?
        options.onValueChange : (_val: string) => { };
    const defaultValue = options.defaultValue ? options.defaultValue : "";

    const [value, setValue] = useState(defaultValue);
    const [visible, setVisible] = useState(false);

    return (
        <InputSpan>
            <input type={visible ? "text" : "password"}
                inputMode={"text"}
                value={options.defaultValue}
                onBlur={onBlur(onQuickValidate, onFullValidate)}
                onChange={onValueChange(onQuickValidate, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
                size={options.size}
                id={props.id}
            />
            {
                options.showable ?
                    <Button text={visible ? "Hide" : "Show"}
                        seamless
                        onClick={toggleVisible(setVisible, visible)}
                        width={"40px"}
                    /> : null
            }
        </InputSpan>
    );
}

function toggleVisible(setVisible: React.Dispatch<React.SetStateAction<boolean>>, visible: boolean) {
    return () => setVisible(!visible);
}