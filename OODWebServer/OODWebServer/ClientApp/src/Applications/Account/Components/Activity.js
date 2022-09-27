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
exports.Activity = void 0;
var React = require("react");
var react_1 = require("react");
var ListList_1 = require("./ListList");
var ListDisplay_1 = require("./ListDisplay");
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            lists: ["List 1", "List 2"]
        };
        return _this;
    }
    Activity.prototype.render = function () {
        return (React.createElement(react_1.Fragment, null,
            React.createElement(ListList_1.default, { lists: this.state.lists, changeList: this.__changeList }),
            React.createElement(ListDisplay_1.default, { currentList: this.state.currentList })));
    };
    Activity.prototype.componentDidMount = function () {
    };
    Activity.prototype.__changeList = function (newList) {
        this.setState({ currentList: newList });
    };
    return Activity;
}(react_1.Component));
exports.Activity = Activity;
exports.default = Activity;
//# sourceMappingURL=Activity.js.map