"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var React = require("react");
var Component_1 = require("./Component");
var IComponentProps_1 = require("./IComponentProps");
require("../Styles/Link.css");
function Link(props) {
    var uniqueKey = (0, Component_1.UniqueKey)("OODCoreComponentLink");
    var className = "OODCoreComponentLink";
    return (React.createElement("span", { onClick: props.onClick, className: (0, IComponentProps_1.getClassName)(className, props.className, props.theme) }, props.children));
}
exports.Link = Link;
//# sourceMappingURL=Link.js.map