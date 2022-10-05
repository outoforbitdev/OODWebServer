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
exports.ListList = void 0;
var React = require("react");
var react_1 = require("react");
var ListList = /** @class */ (function (_super) {
    __extends(ListList, _super);
    function ListList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            lists: props.lists,
        };
        return _this;
    }
    ListList.prototype.render = function () {
        return (React.createElement("table", null, this.state.lists.map(function (list) { return React.createElement("tr", null,
            React.createElement("td", null, list)); })));
    };
    ListList.prototype.componentDidMount = function () {
    };
    return ListList;
}(react_1.Component));
exports.ListList = ListList;
exports.default = ListList;
//# sourceMappingURL=ListList.js.map