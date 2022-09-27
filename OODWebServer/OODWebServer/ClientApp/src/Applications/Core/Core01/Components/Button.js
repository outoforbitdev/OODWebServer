"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var React = require("react");
var Component_1 = require("./Component");
var IComponentProps_1 = require("./IComponentProps");
require("../Styles/Button.css");
function Button(props) {
    var uniqueKey = (0, Component_1.UniqueKey)("OODCoreComponentButton");
    var className = "OODCoreComponentButton";
    className = props.seamless ? "OODCoreComponentButtonSeamless " + className : className;
    var style = {};
    if (props.width) {
        style.width = props.width;
    }
    return (React.createElement("button", { onClick: props.onClick, className: (0, IComponentProps_1.getClassName)(className, props.className, props.theme), style: style }, props.text));
}
exports.Button = Button;
//# sourceMappingURL=Button.js.map