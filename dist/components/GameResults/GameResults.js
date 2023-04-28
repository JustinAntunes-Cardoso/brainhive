"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./GameResults.scss");
function GameResults(_a) {
    var results = _a.results, score = _a.score;
    return (React.createElement("section", { className: 'game-results' },
        React.createElement("h1", { className: 'game-results__title' }, "".concat(score > 8
            ? 'Congratulations!!'
            : score > 5
                ? 'Keep up the good work!'
                : 'Keep Practicing.', " You got ").concat(score, "/10 correct.")),
        React.createElement("aside", { className: 'game-results__table-container' },
            React.createElement("table", { className: 'game-results__table' },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { colSpan: '4' }, "Game Results")),
                    React.createElement("tr", null,
                        React.createElement("th", null, "Question"),
                        React.createElement("th", null, "Response"),
                        React.createElement("th", null, "Correct"),
                        React.createElement("th", null, "Answer"))),
                React.createElement("tbody", null, results.map(function (result) {
                    return (React.createElement("tr", { key: result.id },
                        React.createElement("td", null, result.id),
                        React.createElement("td", null, result.input),
                        React.createElement("td", null, result.correct),
                        React.createElement("td", null, result.answer)));
                }))))));
}
exports.default = GameResults;
//# sourceMappingURL=GameResults.js.map