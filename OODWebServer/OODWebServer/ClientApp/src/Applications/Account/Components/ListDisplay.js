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
exports.ListDisplay = void 0;
var React = require("react");
var react_1 = require("react");
var ListDisplay = /** @class */ (function (_super) {
    __extends(ListDisplay, _super);
    function ListDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentList: props.currentList,
        };
        return _this;
    }
    ListDisplay.prototype.render = function () {
        return (React.createElement("div", null, this.state.currentList));
    };
    ListDisplay.prototype.componentDidMount = function () {
    };
    return ListDisplay;
}(react_1.Component));
exports.ListDisplay = ListDisplay;
exports.default = ListDisplay;
//# sourceMappingURL=ListDisplay.js.map