"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoginForm_1 = __importDefault(require("../../components/LoginForm"));
require("./Login.scss");
function LoginPage() {
    return (react_1.default.createElement("main", { className: 'login' },
        react_1.default.createElement(LoginForm_1.default, null)));
}
exports.default = LoginPage;
//# sourceMappingURL=Login.js.map