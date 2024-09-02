"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Bitxor Community 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License ");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CryptoJS = require("crypto-js");
// internal dependencies
var index_1 = require("../../index");
/**
 * Class `EncryptionService` describes a high level service
 * for encryption/decryption of data.
 *
 * Implemented algorithms for encryption/decryption include:
 * - AES with PBKDF2 (Password-Based Key Derivation Function)
 *
 * @since 0.3.0
 */
var EncryptionService = /** @class */ (function () {
    function EncryptionService() {
    }
    /**
     * The `encrypt` method will encrypt given `data` raw string
     * with given `password` password.
     *
     * First we generate a random salt of 32 bytes, then we iterate
     * 2000 times with PBKDF2 and encrypt with AES.
     *
     * @param password {string}
     * @param data {string}
     */
    EncryptionService.encrypt = function (data, password) {
        // create random salt (32 bytes)
        var salt = CryptoJS.lib.WordArray.random(32);
        // derive key of 8 bytes with 2000 iterations of PBKDF2
        var key = CryptoJS.PBKDF2(password, salt, {
            keySize: 8,
            iterations: 2000,
        });
        // create encryption input vector of 16 bytes (iv)
        var iv = CryptoJS.lib.WordArray.random(16);
        // encrypt with AES
        var encrypted = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        // create our `EncryptedPayload` (16 bytes iv as hex || cipher text)
        var ciphertext = iv.toString() + encrypted.toString();
        var used_salt = CryptoJS.enc.Hex.stringify(salt);
        return new index_1.EncryptedPayload(ciphertext, used_salt);
    };
    /**
     * AES_PBKF2_decryption will decrypt privateKey with provided password
     * @param payload the object containing the encrypted data.
     * @param password the password to decrypt the encrypted data
     */
    EncryptionService.decrypt = function (payload, password) {
        // read payload
        var salt = CryptoJS.enc.Hex.parse(payload.salt);
        var priv = payload.ciphertext;
        // read encryption configuration
        var iv = CryptoJS.enc.Hex.parse(priv.substr(0, 32));
        var cipher = priv.substr(32);
        // re-generate key (PBKDF2)
        var key = CryptoJS.PBKDF2(password, salt, {
            keySize: 8,
            iterations: 2000,
        });
        // decrypt and return
        var decrypted = CryptoJS.AES.decrypt(cipher, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        var decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
        if (!decryptedText) {
            // This happens sometimes when the wrong password is used instead of an Error.
            throw Error('Empty decrypted text!!');
        }
        return decryptedText;
    };
    return EncryptionService;
}());
exports.EncryptionService = EncryptionService;
//# sourceMappingURL=EncryptionService.js.map