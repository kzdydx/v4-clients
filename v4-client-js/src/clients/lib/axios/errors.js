"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AxiosServerError = exports.AxiosError = void 0;
var errors_1 = require("../errors");
/**
 * @description An error thrown by axios.
 *
 * Depending on your use case, if logging errors, you may want to catch axios errors and sanitize
 * them to remove the request and response objects, or sensitive fields. For example:
 *
 *   this.originalError = _.omit(originalError.toJSON(), 'config')
 */
var AxiosError = /** @class */ (function (_super) {
    __extends(AxiosError, _super);
    function AxiosError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AxiosError;
}(errors_1.WrappedError));
exports.AxiosError = AxiosError;
/**
 * @description Axios error with response error fields.
 */
var AxiosServerError = /** @class */ (function (_super) {
    __extends(AxiosServerError, _super);
    function AxiosServerError(response, originalError) {
        var _this = _super.call(this, "".concat(response.status, ": ").concat(response.statusText, " - ").concat(JSON.stringify(response.data, null, 2)), originalError) || this;
        _this.status = response.status;
        _this.statusText = response.statusText;
        _this.data = response.data;
        return _this;
    }
    return AxiosServerError;
}(AxiosError));
exports.AxiosServerError = AxiosServerError;
