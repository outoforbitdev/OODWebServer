"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordField = void 0;
var React = require("react");
var react_1 = require("react");
require("../Styles/Input.css");
var Button_1 = require("./Button");
var InputField_1 = require("./InputField");
function PasswordField(props) {
    var _a;
    var options = (_a = props.options) !== null && _a !== void 0 ? _a : {};
    var onQuickValidate = options.onQuickValidate ?
        options.onQuickValidate : InputField_1.defaultValidator;
    var onFullValidate = options.onFullValidate ?
        options.onFullValidate : InputField_1.defaultValidator;
    var onChange = options.onValueChange ?
        options.onValueChange : function (_val) { };
    var defaultValue = options.defaultValue ? options.defaultValue : "";
    var _b = (0, react_1.useState)(defaultValue), value = _b[0], setValue = _b[1];
    var _c = (0, react_1.useState)(false), visible = _c[0], setVisible = _c[1];
    return (React.createElement(InputField_1.InputSpan, null,
        React.createElement("input", { type: visible ? "text" : "password", inputMode: "text", value: options.defaultValue, onBlur: (0, InputField_1.onBlur)(onQuickValidate, onFullValidate), onChange: (0, InputField_1.onValueChange)(onQuickValidate, onChange, setValue), onKeyDown: (0, InputField_1.onKeyDown)(setValue, defaultValue), size: options.size, id: props.id }),
        options.showable ?
            React.createElement(Button_1.Button, { text: visible ? "Hide" : "Show", seamless: true, onClick: toggleVisible(setVisible, visible), width: "40px" }) : null));
}
exports.PasswordField = PasswordField;
function toggleVisible(setVisible, visible) {
    return function () { return setVisible(!visible); };
}
//# sourceMappingURL=PasswordField.js.map