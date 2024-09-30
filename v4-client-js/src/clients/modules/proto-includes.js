"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.BridgeModule = exports.StakingModule = exports.RewardsModule = exports.StatsModule = exports.FeeTierModule = exports.SubaccountsModule = exports.PricesModule = exports.PerpetualsModule = exports.ClobModule = void 0;
exports.ClobModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/clob/query");
exports.PerpetualsModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/perpetuals/query");
exports.PricesModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/prices/query");
exports.SubaccountsModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/subaccounts/query");
exports.FeeTierModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/feetiers/query");
exports.StatsModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/stats/query");
exports.RewardsModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/rewards/query");
exports.StakingModule = require("@dydxprotocol/v4-proto/src/codegen/cosmos/staking/v1beta1/query");
exports.BridgeModule = require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/bridge/query");
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/cosmos/base/abci/v1beta1/abci"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/clob/order"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/clob/tx"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/google/protobuf/any"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/subaccounts/subaccount"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/sending/tx"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/sending/transfer"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/assets/genesis"), exports);
__exportStar(require("@dydxprotocol/v4-proto/src/codegen/dydxprotocol/assets/asset"), exports);
