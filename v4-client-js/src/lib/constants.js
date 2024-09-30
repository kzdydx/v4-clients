"use strict";
exports.__esModule = true;
exports.SERIALIZED_INT_ZERO = exports.DEFAULT_SEQUENCE = exports.MAX_SUBACCOUNT_NUMBER = exports.MAX_UINT_32 = exports.ZERO_FEE = exports.GAS_MULTIPLIER = exports.API_TIMEOUT_DEFAULT_MS = exports.BROADCAST_TIMEOUT_MS = exports.BROADCAST_POLL_INTERVAL_MS = exports.NOBLE_BECH32_PREFIX = exports.BECH32_PREFIX = void 0;
// Bech32 Prefix
exports.BECH32_PREFIX = 'dydx';
exports.NOBLE_BECH32_PREFIX = 'noble';
// Broadcast Defaults
exports.BROADCAST_POLL_INTERVAL_MS = 300;
exports.BROADCAST_TIMEOUT_MS = 8000;
// API Defaults
exports.API_TIMEOUT_DEFAULT_MS = 5000;
// Gas
exports.GAS_MULTIPLIER = 1.4;
exports.ZERO_FEE = {
    amount: [],
    gas: '0'
};
// Validation
exports.MAX_UINT_32 = 4294967295;
exports.MAX_SUBACCOUNT_NUMBER = 127;
exports.DEFAULT_SEQUENCE = 0;
exports.SERIALIZED_INT_ZERO = Uint8Array.from([0x02]);
