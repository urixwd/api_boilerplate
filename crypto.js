const crypto = require('crypto-js');
function hash(password) {
  // Encrypt
  return crypto.AES.encrypt(password, 'secret key 123');
}
// Imagine that loop below is real requests to some route
for (let i = 0; i < 50; i++) {
  hash('random_password');
}
