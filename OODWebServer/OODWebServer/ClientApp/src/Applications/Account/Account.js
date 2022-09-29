"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screens = void 0;
var React = require("react");
var react_1 = require("react");
var Creation_1 = require("./Components/Creation");
var Login_1 = require("./Components/Login");
var IComponentProps_1 = require("../Core/Core01/Components/IComponentProps");
var Screens;
(function (Screens) {
    Screens["Login"] = "Login";
    Screens["Create"] = "Create";
})(Screens = exports.Screens || (exports.Screens = {}));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            theme: IComponentProps_1.StyleThemes.Light,
            screen: Screens.Login,
        };
        return _this;
    }
    Account.prototype.changeTheme = function (theme) {
        this.setState({ theme: theme });
    };
    Account.prototype.changeScreen = function (screen) {
        this.setState({ screen: screen });
    };
    Account.prototype.createScreen = function (screen) {
        var themer = this.changeTheme.bind(this);
        var screener = this.changeScreen.bind(this);
        switch (screen) {
            case Screens.Login:
                return React.createElement(Login_1.Login, { changeTheme: themer, changeScreen: screener });
            case Screens.Create:
                return React.createElement(Creation_1.Creation, { changeTheme: themer, changeScreen: screener });
        }
    };
    Account.prototype.render = function () {
        return (React.createElement("div", { className: this.state.theme }, this.createScreen(this.state.screen)));
    };
    Account.displayName = Account.name;
    return Account;
}(react_1.Component));
exports.default = Account;
//# sourceMappingURL=Account.js.map