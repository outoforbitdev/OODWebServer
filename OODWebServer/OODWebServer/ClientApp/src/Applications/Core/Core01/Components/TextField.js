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
    var _a;
    var options = (_a = props.options) !== null && _a !== void 0 ? _a : {};
    var onQuickValidate = options.onQuickValidate ?
        options.onQuickValidate : InputField_1.defaultValidator;
    var onFullValidate = options.onFullValidate ?
        options.onFullValidate : InputField_1.defaultValidator;
    var onChange = options.onValueChange ?
        options.onValueChange : function (_val) { };
    var defaultValue = options.defaultValue ? options.defaultValue : "";
    props.options = options;
    var _b = (0, react_1.useState)(defaultValue), value = _b[0], setValue = _b[1];
    return (React.createElement(InputField_1.InputSpan, { options: options },
        React.createElement("input", { type: "text", inputMode: "text", value: value, className: "OODCoreComponentTextField", onBlur: (0, InputField_1.onBlur)(onQuickValidate, onFullValidate), onChange: (0, InputField_1.onValueChange)(onQuickValidate, onChange, setValue), onKeyDown: (0, InputField_1.onKeyDown)(setValue, defaultValue), id: props.id }),
        props.options.clearable ?
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