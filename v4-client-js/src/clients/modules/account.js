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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var constants_1 = require("../constants");
var rest_1 = require("./rest");
/**
 * @description REST endpoints for data related to a particular address.
 */
var AccountClient = /** @class */ (function (_super) {
    __extends(AccountClient, _super);
    function AccountClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountClient.prototype.getSubaccounts = function (address, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = "/v4/addresses/".concat(address);
                return [2 /*return*/, this.get(uri, { limit: limit })];
            });
        });
    };
    AccountClient.prototype.getSubaccount = function (address, subaccountNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = "/v4/addresses/".concat(address, "/subaccountNumber/").concat(subaccountNumber);
                return [2 /*return*/, this.get(uri)];
            });
        });
    };
    AccountClient.prototype.getSubaccountPerpetualPositions = function (address, subaccountNumber, status, limit, createdBeforeOrAtHeight, createdBeforeOrAt) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = '/v4/perpetualPositions';
                return [2 /*return*/, this.get(uri, {
                        address: address,
                        subaccountNumber: subaccountNumber,
                        status: status,
                        limit: limit,
                        createdBeforeOrAtHeight: createdBeforeOrAtHeight,
                        createdBeforeOrAt: createdBeforeOrAt
                    })];
            });
        });
    };
    AccountClient.prototype.getSubaccountAssetPositions = function (address, subaccountNumber, status, limit, createdBeforeOrAtHeight, createdBeforeOrAt) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = '/v4/assetPositions';
                return [2 /*return*/, this.get(uri, {
                        address: address,
                        subaccountNumber: subaccountNumber,
                        status: status,
                        limit: limit,
                        createdBeforeOrAtHeight: createdBeforeOrAtHeight,
                        createdBeforeOrAt: createdBeforeOrAt
                    })];
            });
        });
    };
    AccountClient.prototype.getSubaccountTransfers = function (address, subaccountNumber, limit, createdBeforeOrAtHeight, createdBeforeOrAt) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = '/v4/transfers';
                return [2 /*return*/, this.get(uri, {
                        address: address,
                        subaccountNumber: subaccountNumber,
                        limit: limit,
                        createdBeforeOrAtHeight: createdBeforeOrAtHeight,
                        createdBeforeOrAt: createdBeforeOrAt
                    })];
            });
        });
    };
    AccountClient.prototype.getSubaccountOrders = function (address, subaccountNumber, ticker, tickerType, side, status, type, limit, goodTilBlockBeforeOrAt, goodTilBlockTimeBeforeOrAt, returnLatestOrders) {
        if (tickerType === void 0) { tickerType = constants_1.TickerType.PERPETUAL; }
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = '/v4/orders';
                return [2 /*return*/, this.get(uri, {
                        address: address,
                        subaccountNumber: subaccountNumber,
                        ticker: ticker,
                        tickerType: tickerType,
                        side: side,
                        status: status,
                        type: type,
                        limit: limit,
                        goodTilBlockBeforeOrAt: goodTilBlockBeforeOrAt,
                        goodTilBlockTimeBeforeOrAt: goodTilBlockTimeBeforeOrAt,
                        returnLatestOrders: returnLatestOrders
                    })];
            });
        });
    };
    AccountClient.prototype.getOrder = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = "/v4/orders".concat(orderId);
                return [2 /*return*/, this.get(uri)];
            });
        });
    };
    AccountClient.prototype.getSubaccountFills = function (address, subaccountNumber, ticker, tickerType, limit, createdBeforeOrAtHeight, createdBeforeOrAt) {
        if (tickerType === void 0) { tickerType = constants_1.TickerType.PERPETUAL; }
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = '/v4/fills';
                return [2 /*return*/, this.get(uri, {
                        address: address,
                        subaccountNumber: subaccountNumber,
                        ticker: ticker,
                        tickerType: tickerType,
                        limit: limit,
                        createdBeforeOrAtHeight: createdBeforeOrAtHeight,
                        createdBeforeOrAt: createdBeforeOrAt
                    })];
            });
        });
    };
    AccountClient.prototype.getSubaccountHistoricalPNLs = function (address, subaccountNumber, effectiveBeforeOrAt, effectiveAtOrAfter) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                uri = '/v4/historical-pnl';
                return [2 /*return*/, this.get(uri, {
                        address: address,
                        subaccountNumber: subaccountNumber,
                        effectiveBeforeOrAt: effectiveBeforeOrAt,
                        effectiveAtOrAfter: effectiveAtOrAfter
                    })];
            });
        });
    };
    return AccountClient;
}(rest_1["default"]));
exports["default"] = AccountClient;
