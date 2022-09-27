"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassName = exports.StyleThemes = void 0;
var String_1 = require("../Library/String");
var StyleThemes;
(function (StyleThemes) {
    StyleThemes["Light"] = "OODCoreStyleThemeLight";
    StyleThemes["Dark"] = "OODCoreStyleThemeDark";
})(StyleThemes = exports.StyleThemes || (exports.StyleThemes = {}));
function getClassName(standardClassName, additionalClassName, theme) {
    return combineClassNames(standardClassName, 
    //combineClassNames(additionalClassName, theme ? theme : StyleThemes.Light)
    additionalClassName);
}
exports.getClassName = getClassName;
function combineClassNames(firstName, secondName) {
    if (!(0, String_1.IsNullOrEmpty)(firstName)) {
        if (!(0, String_1.IsNullOrEmpty)(secondName)) {
            return firstName + " " + secondName;
        }
        return firstName;
    }
    else if (!(0, String_1.IsNullOrEmpty)(secondName)) {
        return secondName;
    }
    return "";
}
//# sourceMappingURL=IComponentProps.js.map