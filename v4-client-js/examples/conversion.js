"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCosmosHash = void 0;
var crypto_1 = require("crypto");
function toCosmosHash(u) {
    var hash = (0, crypto_1.createHash)('sha256');
    hash.update(u);
    return hash.digest('hex');
}
exports.toCosmosHash = toCosmosHash;
// Example usage:
var bytes = new Uint8Array([
    168, 141, 84, 49, 120, 30, 230,
    167, 107, 177, 20, 50, 247, 232,
    144, 146, 205, 152, 124, 130, 246,
    132, 60, 154, 222, 238, 118, 105,
    5, 124, 247, 52
]);
var hashString = toCosmosHash(bytes);
console.log(hashString);
