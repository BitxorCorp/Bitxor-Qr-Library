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
var index_1 = require("../index");
var TransactionQR = /** @class */ (function (_super) {
    __extends(TransactionQR, _super);
    /**
     * Construct a Transaction Request QR Code out of the
     * bitxor-sdk Transaction instance.
     *
     * @param   transaction     {Transaction}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    function TransactionQR(/**
                 * The transaction for the request.
                 * @var {Transaction}
                 */ transaction, 
    /**
     * The network type.
     * @var {NetworkType}
     */
    networkType, 
    /**
     * The chain Id.
     * @var {string}
     */
    generationHash, 
    /**
     * The QR Code Type
     *
     * @var {QRCodeType}
     */
    type) {
        if (type === void 0) { type = index_1.QRCodeType.RequestTransaction; }
        var _this = _super.call(this, type, networkType, generationHash) || this;
        _this.transaction = transaction;
        _this.networkType = networkType;
        _this.generationHash = generationHash;
        _this.type = type;
        return _this;
    }
    /**
     * Parse a JSON QR code content into a TransactionQR
     * object.
     *
     * @param   json        {string}
     * @param   transactionCreateFromPayload the transaction parser that creates a transaction from a binary payload.
     * @return  {TransactionQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    TransactionQR.fromJSON = function (json, transactionCreateFromPayload) {
        // create the QRCode object from JSON
        return index_1.RequestTransactionDataSchema.parse(json, transactionCreateFromPayload);
    };
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @return {number}
     */
    TransactionQR.prototype.getTypeNumber = function () {
        // Type version for ContactQR is Version 40, uses correction level L
        // This type of QR can hold up to 2953 bytes of data.
        return 40;
    };
    /**
     * The `getSchema()` method should return an instance
     * of a sub-class of QRCodeDataSchema which describes
     * the QR Code data.
     *
     * @return {QRCodeDataSchema}
     */
    TransactionQR.prototype.getSchema = function () {
        return new index_1.RequestTransactionDataSchema();
    };
    return TransactionQR;
}(index_1.QRCode));
exports.TransactionQR = TransactionQR;
//# sourceMappingURL=TransactionQR.js.map