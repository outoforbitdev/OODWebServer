"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueKey = void 0;
var uuid_1 = require("uuid");
function UniqueKey(componentName) {
    return componentName + (0, uuid_1.v4)();
}
exports.UniqueKey = UniqueKey;
//# sourceMappingURL=Component.js.map