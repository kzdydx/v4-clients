"use strict";
exports.__esModule = true;
exports.generateQueryPath = void 0;
function generateQueryPath(url, params) {
    var definedEntries = Object.entries(params)
        .filter(function (_a) {
        var _key = _a[0], value = _a[1];
        return value !== undefined;
    });
    if (!definedEntries.length) {
        return url;
    }
    var paramsString = definedEntries.map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=").concat(value);
    }).join('&');
    return "".concat(url, "?").concat(paramsString);
}
exports.generateQueryPath = generateQueryPath;
