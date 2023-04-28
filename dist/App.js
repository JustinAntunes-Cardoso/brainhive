"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Header_1 = __importDefault(require("./components/Header"));
var Home_1 = __importDefault(require("./pages/Home"));
var Game_1 = __importDefault(require("./pages/Game"));
var Custom_1 = __importDefault(require("./pages/Custom"));
var Profile_1 = __importDefault(require("./pages/Profile"));
var NotFound_1 = __importDefault(require("./pages/NotFound"));
var Footer_tsx_1 = __importDefault(require("./components/Footer/Footer.tsx"));
require("./App.scss");
function App() {
    return (React.createElement("div", { className: 'App' },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(Header_1.default, null),
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Home_1.default, null) }),
                React.createElement(react_router_dom_1.Route, { path: '/profile/:userId', element: React.createElement(Profile_1.default, null) }),
                React.createElement(react_router_dom_1.Route, { path: '/game/:difficulty', element: React.createElement(Game_1.default, null) }),
                React.createElement(react_router_dom_1.Route, { path: '/custom', element: React.createElement(Custom_1.default, null) }),
                React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(NotFound_1.default, null) })),
            React.createElement(Footer_tsx_1.default, null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map