import { createHash } from 'crypto';

export function toCosmosHash(u: Uint8Array): string {
  const hash = createHash('sha256');
  hash.update(u);
  return hash.digest('hex');
}

// Example usage:
const bytes = new Uint8Array([
  168, 141, 84, 49, 120, 30, 230,
  167, 107, 177, 20, 50, 247, 232,
  144, 146, 205, 152, 124, 130, 246,
  132, 60, 154, 222, 238, 118, 105,
  5, 124, 247, 52
]);

const hashString = toCosmosHash(bytes);
console.log(hashString);