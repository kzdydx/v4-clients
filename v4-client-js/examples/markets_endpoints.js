"use strict";
/**
 * Simple JS example demostrating accessing market data with Indexer REST endpoints
 */
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
exports.MARKET_BTC_USD = void 0;
var constants_1 = require("../src/clients/constants");
var indexer_client_1 = require("../src/clients/indexer-client");
// ------------ Markets ------------
exports.MARKET_BTC_USD = 'BTC-USD';
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var client, response, btcMarket, btcMarketStatus, error_1, response, btcMarket, btcMarketStatus, error_2, response, btcSparklines, error_3, response, trades, error_4, response, asks, bids, asks0, asks0Price, asks0Size, bids0, bids0Price, bids0Size, trades, error_5, response, candles, candles0, startedAt, low, high, open_1, close_1, baseTokenVolume, usdVolume, trades, error_6, response, historicalFunding, historicalFunding0, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new indexer_client_1.IndexerClient(constants_1.Network.testnet().indexerConfig);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.markets.getPerpetualMarkets()];
                case 2:
                    response = _a.sent();
                    console.log(response);
                    console.log('markets');
                    btcMarket = response.markets['BTC-USD'];
                    btcMarketStatus = btcMarket.status;
                    console.log(btcMarketStatus);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1.message);
                    return [3 /*break*/, 4];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, client.markets.getPerpetualMarkets(exports.MARKET_BTC_USD)];
                case 5:
                    response = _a.sent();
                    console.log(response);
                    console.log('markets');
                    btcMarket = response.markets['BTC-USD'];
                    btcMarketStatus = btcMarket.status;
                    console.log(btcMarketStatus);
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.log(error_2.message);
                    return [3 /*break*/, 7];
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, client.markets.getPerpetualMarketSparklines()];
                case 8:
                    response = _a.sent();
                    console.log(response);
                    console.log('sparklines');
                    btcSparklines = response['BTC-USD'];
                    console.log(btcSparklines);
                    return [3 /*break*/, 10];
                case 9:
                    error_3 = _a.sent();
                    console.log(error_3.message);
                    return [3 /*break*/, 10];
                case 10:
                    _a.trys.push([10, 12, , 13]);
                    return [4 /*yield*/, client.markets.getPerpetualMarketTrades(exports.MARKET_BTC_USD)];
                case 11:
                    response = _a.sent();
                    console.log(response);
                    console.log('trades');
                    trades = response.trades;
                    console.log(trades);
                    return [3 /*break*/, 13];
                case 12:
                    error_4 = _a.sent();
                    console.log(error_4.message);
                    return [3 /*break*/, 13];
                case 13:
                    _a.trys.push([13, 15, , 16]);
                    return [4 /*yield*/, client.markets.getPerpetualMarketOrderbook(exports.MARKET_BTC_USD)];
                case 14:
                    response = _a.sent();
                    console.log(response);
                    console.log('orderbook');
                    asks = response.asks;
                    bids = response.bids;
                    if (asks.length > 0) {
                        asks0 = asks[0];
                        asks0Price = asks0.price;
                        asks0Size = asks0.size;
                        console.log(asks0Price);
                        console.log(asks0Size);
                    }
                    if (bids.length > 0) {
                        bids0 = bids[0];
                        bids0Price = bids0.price;
                        bids0Size = bids0.size;
                        console.log(bids0Price);
                        console.log(bids0Size);
                    }
                    trades = response.trades;
                    console.log(trades);
                    return [3 /*break*/, 16];
                case 15:
                    error_5 = _a.sent();
                    console.log(error_5.message);
                    return [3 /*break*/, 16];
                case 16:
                    _a.trys.push([16, 18, , 19]);
                    return [4 /*yield*/, client.markets.getPerpetualMarketCandles(exports.MARKET_BTC_USD, '1MIN')];
                case 17:
                    response = _a.sent();
                    console.log(response);
                    console.log('candles');
                    candles = response.candles;
                    if (candles.length > 0) {
                        candles0 = candles[0];
                        startedAt = candles0.startedAt;
                        low = candles0.low;
                        high = candles0.high;
                        open_1 = candles0.open;
                        close_1 = candles0.close;
                        baseTokenVolume = candles0.baseTokenVolume;
                        usdVolume = candles0.usdVolume;
                        trades = candles0.trades;
                        console.log(startedAt);
                        console.log(low);
                        console.log(high);
                        console.log(open_1);
                        console.log(close_1);
                        console.log(baseTokenVolume);
                        console.log(usdVolume);
                        console.log(trades);
                    }
                    return [3 /*break*/, 19];
                case 18:
                    error_6 = _a.sent();
                    console.log(error_6.message);
                    return [3 /*break*/, 19];
                case 19:
                    _a.trys.push([19, 21, , 22]);
                    return [4 /*yield*/, client.markets.getPerpetualMarketHistoricalFunding(exports.MARKET_BTC_USD)];
                case 20:
                    response = _a.sent();
                    console.log(response);
                    console.log('historical funding');
                    historicalFunding = response.historicalFunding;
                    if (historicalFunding.length > 0) {
                        historicalFunding0 = historicalFunding[0];
                        console.log(historicalFunding0);
                    }
                    return [3 /*break*/, 22];
                case 21:
                    error_7 = _a.sent();
                    console.log(error_7.message);
                    return [3 /*break*/, 22];
                case 22: return [2 /*return*/];
            }
        });
    });
}
test().then(function () {
})["catch"](function (error) {
    console.log(error.message);
});
