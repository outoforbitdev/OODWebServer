"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordField = void 0;
var React = require("react");
var react_1 = require("react");
require("../Styles/Input.css");
var Button_1 = require("./Button");
var InputField_1 = require("./InputField");
function PasswordField(props) {
    var onQuickValidate = props.onQuickValidate ?
        props.onQuickValidate : InputField_1.defaultValidator;
    var onFullValidate = props.onFullValidate ?
        props.onFullValidate : InputField_1.defaultValidator;
    var onChange = props.onValueChange ?
        props.onValueChange : function (_val) { };
    var defaultValue = props.defaultValue ? props.defaultValue : "";
    var _a = (0, react_1.useState)(defaultValue), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(false), visible = _b[0], setVisible = _b[1];
    return (React.createElement(InputField_1.InputSpan, null,
        React.createElement("input", { type: visible ? "text" : "password", inputMode: "text", value: props.defaultValue, onBlur: (0, InputField_1.onBlur)(onQuickValidate, onFullValidate), onChange: (0, InputField_1.onValueChange)(onQuickValidate, onChange, setValue), onKeyDown: (0, InputField_1.onKeyDown)(setValue, defaultValue), size: props.size, id: props.id }),
        props.showable ?
            React.createElement(Button_1.Button, { text: visible ? "Hide" : "Show", seamless: true, onClick: toggleVisible(setVisible, visible), width: "40px" }) : null));
}
exports.PasswordField = PasswordField;
function toggleVisible(setVisible, visible) {
    return function () { return setVisible(!visible); };
}
//# sourceMappingURL=PasswordField.js.map