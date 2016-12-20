#!/usr/bin/env node

console.log('How to encrypt: chaabi "<text>"\nHow to decrypt: chaabi open');
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');
const fs = require("fs");

program
    .version('0.0.3')
    .arguments('<text>')
    .option('-p, --password <password>', 'The user\'s password')
    .option('-s, --secret <secret>', 'Secret text to decrypt')
    .action(function(text) {
        co(function*() {
            if (text == 'open') {
                //var secret = yield prompt('secret: ');
                var password = yield prompt.password('password: ');
                //console.log("Decrypt \""+secret);
                //console.log(decrypt(secret, password));
                fs.access("./.chaabi", fs.F_OK, function(err) {
                    if (!err) {
                        fs.readFile("./.chaabi", 'utf8', (err1, data) => {
                            if (err1) throw err1;
                            // console.log(data);
                            //data.replace(/(\r\n|\n|\r)/gm, "");
                            var encryptedDataArray = data.split(/\r?\n\n/);
                            for (var i = 0; i < encryptedDataArray.length; i++) {
                                console.log(decrypt(encryptedDataArray[i], password));
                            }
                        });
                    } else {
                        console.log("Chaabi does not exist");
                    }
                });
            } else if (text == "pop") {
                //TODO: remove last entry. Ask for confirmation, default No.
            } else {
                var password = yield prompt.password('password: ');
                console.log("Encrypt \"" + text);
                var encryptedText = encrypt(text, password);
                console.log(encryptedText);
                //var tag = yield prompt('tag: ');
                fs.appendFile(".chaabi", encryptedText + "\n\n", 'utf8', (err) => {
                    if (err) throw err;
                    console.log('chaabi added');
                });
            }
        });
    })
    .parse(process.argv);



var crypto = require('crypto'),
    algorithm = 'aes-256-ctr';

function encrypt(text, password) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text, password) {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}