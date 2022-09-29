"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var React = require("react");
require("../Styles/Modal.css");
var Button_1 = require("./Button");
var IComponentProps_1 = require("./IComponentProps");
var XRow_1 = require("./XRow");
function Modal(props) {
    return (React.createElement("div", { className: (0, IComponentProps_1.getClassName)(props.className, "OODCoreModalContainer") },
        React.createElement("div", { className: "OODCoreModalColumn OODCoreModalMargin" }),
        React.createElement("div", { className: "OODCoreModalColumn" },
            React.createElement("div", { className: "OODCoreModalMargin" }),
            React.createElement("div", { className: "OODCoreModalFrame" },
                props.closable ? React.createElement(XRow_1.XRow, null) : null,
                React.createElement("div", { className: "OODCoreModalContent" }, props.children ? props.children : null),
                React.createElement("div", { className: "OODCoreModalButtons" },
                    React.createElement("div", { className: "OODCoreModalMargin" }),
                    React.createElement("div", { className: "OODCoreModalButtonsDiv" },
                        props.accept ? React.createElement(Button_1.Button, { text: props.accept }) : null,
                        props.cancel ? React.createElement(Button_1.Button, { text: props.cancel }) : null))),
            React.createElement("div", { className: "OODCoreModalMargin" })),
        React.createElement("div", { className: "OODCoreModalColumn OODCoreModalMargin" })));
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map