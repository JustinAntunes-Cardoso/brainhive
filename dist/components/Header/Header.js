"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var BrainHive_Logo_Transparent_png_1 = __importDefault(require("../../assets/logo/BrainHive_Logo_Transparent.png"));
var justin_avatar_jpg_1 = __importDefault(require("../../assets/images/justin_avatar.jpg"));
require("./Header.scss");
function Header() {
    return (react_1.default.createElement("header", { className: 'header' },
        react_1.default.createElement("section", { className: 'header__container' },
            react_1.default.createElement("div", { className: 'header__logo-container' },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                    react_1.default.createElement("img", { src: BrainHive_Logo_Transparent_png_1.default, className: 'header__logo', alt: 'logo' })),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                    react_1.default.createElement("h1", { className: 'header__logo-text' }, "BrainHive"))),
            react_1.default.createElement("nav", { className: 'header__nav' },
                react_1.default.createElement("img", { src: justin_avatar_jpg_1.default, className: 'header__avatar', alt: 'user profile' })))));
}
exports.default = Header;
//# sourceMappingURL=Header.js.map