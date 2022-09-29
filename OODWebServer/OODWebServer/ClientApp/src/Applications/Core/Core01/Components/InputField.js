"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onKeyDown = exports.onValueChange = exports.onBlur = exports.defaultValidator = exports.InputSpan = void 0;
var React = require("react");
require("../Styles/Input.css");
require("../Styles/Themes.css");
var IComponentProps_1 = require("./IComponentProps");
function InputSpan(props) {
    return (React.createElement("span", { className: (0, IComponentProps_1.getClassName)("OODCoreComponentInputField", props.className, props.theme) }, props.children));
}
exports.InputSpan = InputSpan;
function defaultValidator(_val) {
    return true;
}
exports.defaultValidator = defaultValidator;
function onBlur(onQuickValidate, onFullValidate) {
    return function (event) {
        var val = event.target.value;
        if (val) {
            if (!onQuickValidate(val) || !onFullValidate(val)) {
                event.currentTarget.focus();
            }
        }
    };
}
exports.onBlur = onBlur;
function onValueChange(onQuickValidate, onValueChange, setValue) {
    return function (event) {
        var val = event.target.value;
        if (val) {
            setValue(val);
            if (onQuickValidate(val)) {
                onValueChange(val);
            }
        }
    };
}
exports.onValueChange = onValueChange;
function onKeyDown(setValue, defaultValue) {
    return function (event) {
        if (event.keyCode === 28) {
            setValue(defaultValue);
        }
    };
}
exports.onKeyDown = onKeyDown;
//# sourceMappingURL=InputField.js.map