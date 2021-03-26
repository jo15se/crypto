var crypto = require('crypto');
var fs = require('fs')
var iv = crypto.randomBytes(16);
var key = '12345678123456781234567812345678';

function cryp(file){
	var leer = fs.readFileSync(file,'utf-8')
	var cipher = crypto.createCipheriv('aes-256-cbc',key,iv);
	var encriptar = cipher.update(leer, 'utf-8', 'hex');
	encriptar += cipher.final('hex');

console.log(encriptar)
}

var archivo = cryp('leer.txt') + ' '


/*var decipher = crypto.createDecipheriv('aes-256-cbc',key,iv);
var desencriptar = decipher.update(cryp('leer.txt'), 'hex', 'utf-8');
desencriptar += decipher.final('utf-8');

console.log('desencriptado: ' + desencriptar)*/

fs.writeFile('prueba.txt',archivo , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 