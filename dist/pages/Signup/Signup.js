"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SignupForm_1 = __importDefault(require("../../components/SignupForm"));
require("./Signup.scss");
function SignupPage() {
    return (react_1.default.createElement("section", { className: 'Signup' },
        react_1.default.createElement(SignupForm_1.default, null)));
}
exports.default = SignupPage;
//# sourceMappingURL=Signup.js.map