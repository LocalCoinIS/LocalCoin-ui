/* eslint-disable */

// Filter BTS 0.9.2+ import keys export file so that it will include only private keys
// that may be found in the BTS 2.0 genesis block.
// Dependencies:
// ./bloom_bitshares.dat (1,048,576 bytes) sha1 4d80faa41a5e868899febdc9dab48d1f2d567487992810cf0532f3c0ee2b266c
// nodejs, npm, and: npm install

/*
* ./bloom.dat is from bitshares/graphene/programs/genesis_util/create_bloom_filter.py
* The bloom filter was created with a genesis containing BTS prefixed keys.  Create
* or dowload this file first.
*/

// Automatic usage: name your wallet file wallet.json and run "npm start".
// Output is called "filtered_wallet.json"

// Manual usage: cat large_import_keys.json | node ./bloom_filter_wallet.js > filtered_import_keys.json

var fs = require("fs");

require("coffee-script/register"); // npm install coffee-script

var graphenejs = require("bitsharesjs");
var h = graphenejs.hash;
var key_utils = graphenejs.key;
const chainPrefix = "LLC";

fs.readFile("bloom_bitshares.dat", function(err, data) {
    if (err) throw err;
    console.error(
        "bloom_bitshares.dat (" + data.length + " bytes)",
        "sha1",
        h.sha1(data).toString("hex"),
        "\n"
    );

    var bits_in_filter = data.length * 8; // 8388608 (test data)
    function in_bloom(str) {
        // echo -n '0:BTS87mopaNqLDjT1BvzqQR3QjWzWSTgkWnMcwt5sqxHuavCBi1s3m'|sha256sum
        // str = 'BTS87mopaNqLDjT1BvzqQR3QjWzWSTgkWnMcwt5sqxHuavCBi1s3n' // should be found
        // str = 'BTS4A43UCoWz1F5vqLxX3LLoGHKs1GzCGRjZ' // should be found
        for (var hashes = 0; hashes < 3; hashes++) {
            hex = h.sha256(hashes + ":" + str); //"...af2884"
            bit_address =
                parseInt(hex.slice(-3).toString("hex"), 16) % bits_in_filter; // 3090564
            // console.error("bit_address", bit_address.toString(16))
            byte_address = bit_address >> 3; // 386320
            // console.error("byte_address", byte_address.toString(16))
            mask = 1 << (bit_address & 7); // 16
            // console.error("mask", mask.toString(16))
            var byte = data[byte_address];
            // console.error("byte", byte.toString(16))
            // console.error("byte & mask", byte & mask, (byte & mask) === 0, '\n')
            if ((byte & mask) === 0) return false;
        }
        return true;
    }

    var stdin = process.stdin,
        inputChunks = [];
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", function(chunk) {
        inputChunks.push(chunk);
    });
    stdin.on("end", function() {
        var inputJSON = inputChunks.join("");
        var wallet = JSON.parse(inputJSON);
        var removed_count = 0,
            running_count = 0;
        if (!wallet.account_keys) unsupportedJsonFormat();
        var total_count = 0;
        for (let a = 0; a < wallet.account_keys.length; a++) {
            let keys = wallet.account_keys[a];
            total_count += keys.encrypted_private_keys.length;
        }
        for (let a = 0; a < wallet.account_keys.length; a++) {
            var keys = wallet.account_keys[a];
            let current_count = 0;
            for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                current_count++;
                running_count++;
                if (running_count % 100 === 0)
                    console.error(
                        "processing | current:",
                        current_count,
                        "/",
                        keys.encrypted_private_keys.length,
                        "total:",
                        running_count,
                        "/",
                        total_count
                    );
                if (!keys.public_keys) unsupportedJsonFormat();
                var key = keys.public_keys[k];

                if (/^GPH/.test(key)) key = chainPrefix + key.substring(3);
                if (in_bloom(key)) continue;
                var addresses = key_utils.addresses(key, chainPrefix);
                var addy_found = false;
                for (var i = 0; i < addresses.length; i++) {
                    if (in_bloom(addresses[i])) {
                        addy_found = true;
                        break;
                    }
                }
                if (addy_found) continue;
                delete keys.encrypted_private_keys[k];
                delete keys.public_keys[k];
                removed_count++;
            }
            var encrypted_private_keys = [],
                public_keys = [];
            for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                if (!keys.encrypted_private_keys[k]) continue;
                encrypted_private_keys.push(keys.encrypted_private_keys[k]);
                public_keys.push(keys.public_keys[k]);
            }
            keys.encrypted_private_keys = encrypted_private_keys;
            keys.public_keys = public_keys;
            console.error(
                "kept",
                running_count - removed_count,
                "of",
                running_count,
                "keys"
            );
            console.error();
        }
        console.log(JSON.stringify(wallet, null, 1));
    });
});

function unsupportedJsonFormat() {
    console.error("Unsupported JSON wallet format");
    process.exit(1);
}
