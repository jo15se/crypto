var crypto = require('crypto');

var iv = crypto.randomBytes(16);

var secret = 'pablito clabo un clavito';
var key = '12345678123456781234567812345678';

var cipher = crypto.createCipheriv('aes-256-cbc',key,iv);
var encriptar = cipher.update(secret, 'utf-8', 'hex');
encriptar += cipher.final('hex');

console.log('encriptado: ' + encriptar)


var decipher = crypto.createDecipheriv('aes-256-cbc',key,iv);
var desencriptar = decipher.update(encriptar, 'hex', 'utf-8');
desencriptar += decipher.final('utf-8');

console.log('desencriptado: ' + desencriptar)