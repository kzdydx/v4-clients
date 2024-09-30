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
exports.WrappedError = exports.CustomError = exports.UserError = exports.BroadcastErrorObject = exports.UnexpectedClientError = void 0;
/**
 * An edge-case was hit in the client that should never have been reached.
 */
var UnexpectedClientError = /** @class */ (function (_super) {
    __extends(UnexpectedClientError, _super);
    function UnexpectedClientError() {
        var _this = _super.call(this, 'An unexpected error occurred on the client') || this;
        _this.name = 'UnexpectedClientError';
        return _this;
    }
    return UnexpectedClientError;
}(Error));
exports.UnexpectedClientError = UnexpectedClientError;
/**
 * An error occurred during the broadcasting process.
 */
var BroadcastErrorObject = /** @class */ (function (_super) {
    __extends(BroadcastErrorObject, _super);
    function BroadcastErrorObject(message, result) {
        var _this = _super.call(this, message) || this;
        _this.name = 'BroadcastError';
        _this.result = result;
        _this.code = result.code;
        _this.codespace = result.codespace;
        return _this;
    }
    return BroadcastErrorObject;
}(Error));
exports.BroadcastErrorObject = BroadcastErrorObject;
/**
 * User error occurred during a client operation.
 */
var UserError = /** @class */ (function (_super) {
    __extends(UserError, _super);
    function UserError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'UserError';
        return _this;
    }
    return UserError;
}(Error));
exports.UserError = UserError;
/**
 * @description Base class for custom errors.
 */
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _this = _super.call(this, message) || this;
        // Set a more specific name. This will show up in e.g. console.log.
        _this.name = _this.constructor.toString();
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
/**
 * @description Base class for a custom error which wraps another error.
 */
var WrappedError = /** @class */ (function (_super) {
    __extends(WrappedError, _super);
    function WrappedError(message, originalError) {
        var _this = _super.call(this, message) || this;
        _this.originalError = originalError;
        return _this;
    }
    return WrappedError;
}(CustomError));
exports.WrappedError = WrappedError;
