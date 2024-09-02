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
var SignedTransactionDataSchema_1 = require("./schemas/SignedTransactionDataSchema");
var SignedTransactionQR = /** @class */ (function (_super) {
    __extends(SignedTransactionQR, _super);
    /**
     * Construct a Address QR Code out of the
     * symbol public key.
     *
     * @param singedTransaction
     * @param type
     * @param   networkType     {INetworkType}
     * @param   generationHash         {string}
     */
    function SignedTransactionQR(/**
                 * The transaction for the request.
                 * @var {Transaction}
                 */ singedTransaction, 
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
        if (type === void 0) { type = index_1.QRCodeType.SignedTransaction; }
        var _this = _super.call(this, index_1.QRCodeType.SignedTransaction, networkType, generationHash) || this;
        _this.singedTransaction = singedTransaction;
        _this.networkType = networkType;
        _this.generationHash = generationHash;
        _this.type = type;
        return _this;
    }
    /**
     * Parse a JSON QR code content into an AddressQR
     * object.
     *
     * @param   json        {string}
     * @return  {AddressQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    SignedTransactionQR.fromJSON = function (json, transactionCreateFromPayload) {
        // create the QRCode object from JSON
        return SignedTransactionDataSchema_1.SignedTransactionDataSchema.parse(json, transactionCreateFromPayload);
    };
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @return {number}
     */
    SignedTransactionQR.prototype.getTypeNumber = function () {
        // Type version for SignedTransaction is Version 40, uses correction level M
        // This type of QR can hold up to 412 binary bytes.
        return 40;
    };
    /**
     * The `getSchema()` method should return an instance
     * of a sub-class of QRCodeDataSchema which describes
     * the QR Code data.
     *
     * @return {QRCodeDataSchema}
     */
    SignedTransactionQR.prototype.getSchema = function () {
        return new SignedTransactionDataSchema_1.SignedTransactionDataSchema();
    };
    return SignedTransactionQR;
}(index_1.QRCode));
exports.SignedTransactionQR = SignedTransactionQR;
//# sourceMappingURL=SignedTransactionQR.js.map