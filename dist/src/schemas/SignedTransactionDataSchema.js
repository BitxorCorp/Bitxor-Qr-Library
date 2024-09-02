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
var SignedTransactionQR_1 = require("../SignedTransactionQR");
/**
 * Class `SignedTransactionDataSchema` describes a transaction
 * request QR code data schema.
 *
 * @since 0.3.0
 */
var SignedTransactionDataSchema = /** @class */ (function (_super) {
    __extends(SignedTransactionDataSchema, _super);
    function SignedTransactionDataSchema() {
        return _super.call(this) || this;
    }
    /**
     * The `getData()` method returns an object
     * that will be stored in the `data` field of
     * the underlying QR Code JSON content.
     *
     * @return {any}
     */
    SignedTransactionDataSchema.prototype.getData = function (qr) {
        // serialize the transaction object data.
        var payload = qr.singedTransaction.toDTO();
        return {
            "payload": payload,
        };
    };
    /**
     * Parse a JSON QR code content into a SignedTransactionQR
     * object.
     *
     * @param   json    {string}
     * @param   transactionCreateFromPayload the transaction parser that creates a transaction from a binary payload.
     * @return  {TransactionQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    SignedTransactionDataSchema.parse = function (json, transactionCreateFromPayload) {
        if (!json.length) {
            throw Error('JSON argument cannot be empty.');
        }
        var jsonObj = JSON.parse(json);
        if (!jsonObj.type || jsonObj.type !== index_1.QRCodeType.SignedTransaction) {
            throw Error('Invalid type field value for SignedTransactionQR.');
        }
        // read contact data
        var transaction = transactionCreateFromPayload(jsonObj.data.payload);
        var network = jsonObj.network_id;
        var generationHash = jsonObj.chain_id;
        return new SignedTransactionQR_1.SignedTransactionQR(transaction, network, generationHash);
    };
    return SignedTransactionDataSchema;
}(index_1.QRCodeDataSchema));
exports.SignedTransactionDataSchema = SignedTransactionDataSchema;
//# sourceMappingURL=SignedTransactionDataSchema.js.map