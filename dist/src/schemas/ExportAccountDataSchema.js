"use strict";
/**
 * Bitxor Community 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// internal dependencies
var index_1 = require("../../index");
/**
 * Class `ExportAccountDataSchema` describes an export
 * account QR code data schema.
 *
 * @since 0.3.0
 */
var ExportAccountDataSchema = /** @class */ (function (_super) {
    __extends(ExportAccountDataSchema, _super);
    function ExportAccountDataSchema() {
        return _super.call(this) || this;
    }
    /**
     * The `getData()` method returns an object
     * that will be stored in the `data` field of
     * the underlying QR Code JSON content.
     *
     * @return {any}
     */
    ExportAccountDataSchema.prototype.getData = function (qr) {
        if (qr.encrypted) {
            // we will store a password encrypted copy of the private key
            var encryptedData = index_1.EncryptionService.encrypt(qr.accountPrivateKey, qr.password);
            return {
                "ciphertext": encryptedData.ciphertext,
                "salt": encryptedData.salt,
            };
        }
        else {
            return {
                "privateKey": qr.accountPrivateKey
            };
        }
    };
    /**
     * Parse a JSON QR code content into a AccountQR
     * object.
     *
     * @param   json        {string}
     * @param   password    {string=} Optional password
     * @return  {AccountQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     * @throws  {Error}     On invalid password.
     */
    ExportAccountDataSchema.parse = function (json, password) {
        if (!json.length) {
            throw new Error('JSON argument cannot be empty.');
        }
        var jsonObj = JSON.parse(json);
        if (!jsonObj.type || jsonObj.type !== index_1.QRCodeType.ExportAccount) {
            throw new Error('Invalid type field value for AccountQR.');
        }
        if (!jsonObj.hasOwnProperty('data')) {
            throw new Error('Missing mandatory property for payload.');
        }
        try {
            // decrypt private key
            var privKey = index_1.EncryptedPayload.isDataEncrypted(jsonObj.data) ? index_1.EncryptionService.decrypt(index_1.EncryptedPayload.fromJSON(JSON.stringify(jsonObj.data)), password) : jsonObj.data.privateKey;
            // more content validation
            if (!privKey || (privKey.length !== 64 && privKey.length !== 66)) {
                throw new Error('Invalid private key.');
            }
            var network = jsonObj.network_id;
            var generationHash = jsonObj.chain_id;
            // create account
            return new index_1.AccountQR(privKey, network, generationHash, password);
        }
        catch (e) {
            throw new Error('Could not parse account information.');
        }
    };
    return ExportAccountDataSchema;
}(index_1.QRCodeDataSchema));
exports.ExportAccountDataSchema = ExportAccountDataSchema;
//# sourceMappingURL=ExportAccountDataSchema.js.map