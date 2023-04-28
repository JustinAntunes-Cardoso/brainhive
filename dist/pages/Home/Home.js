"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Hero_1 = __importDefault(require("../../components/Hero"));
require("./Home.scss");
function HomePage() {
    return (React.createElement("main", { className: 'home' },
        React.createElement(Hero_1.default, null)));
}
exports.default = HomePage;
//# sourceMappingURL=Home.js.map