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
var CosignatureQR = /** @class */ (function (_super) {
    __extends(CosignatureQR, _super);
    /**
     * Construct a Transaction Request QR Code out of the
     * bitxor-sdk Transaction instance.
     *
     * @param   transaction     {ITransaction}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    function CosignatureQR(/**
                 * The transaction for the request.
                 * @var {AggregateTransaction}
                 */ transaction, 
    /**
     * The network type.
     * @var {NetworkType}
     */
    networkType, 
    /**
     * The network generation hash.
     * @var {string}
     */
    generationHash) {
        return _super.call(this, transaction, networkType, generationHash, index_1.QRCodeType.RequestCosignature) || this;
    }
    /**
     * Parse a JSON QR code content into a CosignatureQR
     * object.
     *
     * @param   json        {string}
     * @param   transactionCreateFromPayload the transaction parser that creates a transaction from a binary payload.
     * @return  {CosignatureQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    CosignatureQR.fromJSON = function (json, transactionCreateFromPayload) {
        // create the QRCode object from JSON
        return index_1.RequestCosignatureDataSchema.parse(json, transactionCreateFromPayload);
    };
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @return {number}
     */
    CosignatureQR.prototype.getTypeNumber = function () {
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
    CosignatureQR.prototype.getSchema = function () {
        return new index_1.RequestCosignatureDataSchema();
    };
    return CosignatureQR;
}(index_1.TransactionQR));
exports.CosignatureQR = CosignatureQR;
//# sourceMappingURL=CosignatureQR.js.map