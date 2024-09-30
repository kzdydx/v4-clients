"use strict";
exports.__esModule = true;
exports.IndexerClient = void 0;
var constants_1 = require("./constants");
var account_1 = require("./modules/account");
var markets_1 = require("./modules/markets");
var utility_1 = require("./modules/utility");
/**
 * @description Client for Indexer
 */
var IndexerClient = /** @class */ (function () {
    function IndexerClient(config, apiTimeout) {
        this.config = config;
        this.apiTimeout = apiTimeout !== null && apiTimeout !== void 0 ? apiTimeout : constants_1.DEFAULT_API_TIMEOUT;
        this._markets = new markets_1["default"](config.restEndpoint);
        this._account = new account_1["default"](config.restEndpoint);
        this._utility = new utility_1["default"](config.restEndpoint);
    }
    Object.defineProperty(IndexerClient.prototype, "markets", {
        /**
         * @description Get the public module, used for interacting with public endpoints.
         *
         * @returns The public module
         */
        get: function () {
            return this._markets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexerClient.prototype, "account", {
        /**
         * @description Get the private module, used for interacting with private endpoints.
         *
         * @returns The private module
         */
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexerClient.prototype, "utility", {
        /**
         * @description Get the utility module, used for interacting with non-market public endpoints.
         */
        get: function () {
            return this._utility;
        },
        enumerable: false,
        configurable: true
    });
    return IndexerClient;
}());
exports.IndexerClient = IndexerClient;
