"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var React = require("react");
var Account_1 = require("../Account");
var Button_1 = require("../../Core/Core01/Components/Button");
var Link_1 = require("../../Core/Core01/Components/Link");
var Modal_1 = require("../../Core/Core01/Components/Modal");
var PasswordField_1 = require("../../Core/Core01/Components/PasswordField");
var TextField_1 = require("../../Core/Core01/Components/TextField");
function Login(props) {
    return (React.createElement(Modal_1.Modal, null,
        React.createElement("label", null, "Username"),
        React.createElement("div", null,
            React.createElement(TextField_1.TextField, { clearable: true })),
        React.createElement("div", null,
            React.createElement("span", null)),
        React.createElement("label", null, "Password"),
        React.createElement("div", null,
            React.createElement(PasswordField_1.PasswordField, { showable: true })),
        React.createElement(Button_1.Button, { text: "Login", width: "234px" }),
        React.createElement("br", null),
        React.createElement(Link_1.Link, { onClick: function () { return props.changeScreen(Account_1.Screens.Create); } }, "Create Account")));
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map