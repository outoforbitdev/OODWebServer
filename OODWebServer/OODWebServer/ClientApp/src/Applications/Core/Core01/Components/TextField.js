"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
var React = require("react");
var react_1 = require("react");
var Compose_1 = require("../Library/Compose");
require("../Styles/Input.css");
var Button_1 = require("./Button");
var InputField_1 = require("./InputField");
function TextField(props) {
    var onQuickValidate = props.onQuickValidate ?
        props.onQuickValidate : InputField_1.defaultValidator;
    var onFullValidate = props.onFullValidate ?
        props.onFullValidate : InputField_1.defaultValidator;
    var onChange = props.onValueChange ?
        props.onValueChange : function (_val) { };
    var defaultValue = props.defaultValue ? props.defaultValue : "";
    var _a = (0, react_1.useState)(defaultValue), value = _a[0], setValue = _a[1];
    return (React.createElement(InputField_1.InputSpan, null,
        React.createElement("input", { type: "text", inputMode: "text", value: value, className: "OODCoreComponentTextField", onBlur: (0, InputField_1.onBlur)(onQuickValidate, onFullValidate), onChange: (0, InputField_1.onValueChange)(onQuickValidate, onChange, setValue), onKeyDown: (0, InputField_1.onKeyDown)(setValue, defaultValue) }),
        props.clearable ?
            React.createElement(Button_1.Button, { text: "Clear", onClick: (0, Compose_1.Compose)(__clearField, setValue), seamless: true, width: "40px" }) : null));
}
exports.TextField = TextField;
function __clearField(setValue) {
    setValue("");
}
//function defaultValidator(_val: string) {
//    return true;
//}
//function onBlur(onQuickValidate: TextValidator, onFullValidate: TextValidator) {
//    return (event: FocusEvent<HTMLInputElement>) => {
//        const val = event.target.value;
//        if (!onQuickValidate(val) || !onFullValidate(val)) {
//            event.currentTarget.focus();
//        }
//    }
//}
//function onValueChange(
//    onQuickValidate: TextValidator,
//    onValueChange: (val: string) => void,
//    setValue: (val: string) => void)
//{
//    return (event: ChangeEvent<HTMLInputElement>) => {
//        const val = event.target.value;
//        setValue(val);
//        if (onQuickValidate(val)) {
//            onValueChange(val);
//        }
//    };
//}
//function onKeyDown(setValue: (val: string) => void, defaultValue: string) {
//    return (event: KeyboardEvent<HTMLInputElement>) => {
//        if (event.keyCode === 28) {
//            setValue(defaultValue);
//        }
//    }
//}
//# sourceMappingURL=TextField.js.map