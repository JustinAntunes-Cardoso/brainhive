"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var larva_icon_png_1 = __importDefault(require("../../assets/images/larva_icon.png"));
var bee_icon_svg_1 = __importDefault(require("../../assets/images/bee_icon.svg"));
var wasp_icon_png_1 = __importDefault(require("../../assets/images/wasp_icon.png"));
require("./GameSelect.scss");
function GameSelect() {
    return (React.createElement("section", { className: 'game-selected' },
        React.createElement("article", { className: 'game-selected__button-container' },
            React.createElement(react_router_dom_1.Link, { to: '/game/easy' },
                React.createElement("button", { id: 'easy', className: 'game-selected__button game-selected__button--easy' },
                    React.createElement("img", { src: larva_icon_png_1.default, className: 'game-selected__bug', alt: 'Larva Icon' }),
                    "Easy")),
            React.createElement(react_router_dom_1.Link, { to: '/game/medium' },
                React.createElement("button", { id: 'medium', className: 'game-selected__button' },
                    React.createElement("img", { src: bee_icon_svg_1.default, className: 'game-selected__bug', alt: 'Bee Icon' }),
                    "Medium")),
            React.createElement(react_router_dom_1.Link, { to: '/game/hard' },
                React.createElement("button", { id: 'hard', className: 'game-selected__button' },
                    React.createElement("img", { src: wasp_icon_png_1.default, className: 'game-selected__bug', alt: 'Wasp Icon' }),
                    "Hard")))));
}
exports.default = GameSelect;
//# sourceMappingURL=GameSelect.js.map