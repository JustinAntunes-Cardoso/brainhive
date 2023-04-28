"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BrainHiveHero_png_1 = __importDefault(require("../../assets/images/BrainHiveHero.png"));
var GameSelect_1 = __importDefault(require("../GameSelect"));
require("./Hero.scss");
function Hero() {
    return (react_1.default.createElement("section", { className: 'hero' },
        react_1.default.createElement("article", { className: 'hero__image-container' },
            react_1.default.createElement("img", { className: 'hero__image-logo', src: BrainHiveHero_png_1.default, alt: 'BrainHive Hero' }),
            react_1.default.createElement(GameSelect_1.default, null))));
}
exports.default = Hero;
//# sourceMappingURL=Hero.js.map