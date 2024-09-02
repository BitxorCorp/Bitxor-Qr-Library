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
var AccountQR = /** @class */ (function (_super) {
    __extends(AccountQR, _super);
    /**
     * Construct an Account QR Code out of the
     * symbol private key.
     *
     * @param   accountPrivateKey  {string}
     * @param   password        {string}
     * @param   networkType     {INetworkType}
     * @param   generationHash  {string}
     */
    function AccountQR(/**
                 * The account to be exported
                 * @var {Account}
                 */ accountPrivateKey, 
    /**
     * The network type.
     * @var {NetworkType}
     */
    networkType, 
    /**
     * The network generation hash.
     * @var {string}
     */
    generationHash, 
    /**
     * Optional password for encryption when not provided means non-password-protected
     * @var {string=}
     */
    password) {
        var _this = _super.call(this, index_1.QRCodeType.ExportAccount, networkType, generationHash, password !== undefined) || this;
        _this.accountPrivateKey = accountPrivateKey;
        _this.networkType = networkType;
        _this.generationHash = generationHash;
        _this.password = password;
        return _this;
    }
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
     */
    AccountQR.fromJSON = function (json, password) {
        // create the QRCode object from JSON
        return index_1.ExportAccountDataSchema.parse(json, password);
    };
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @see {QRUtil.MAX_LENGTH}
     * @return {number}
     */
    AccountQR.prototype.getTypeNumber = function () {
        // Type version for AccountQR is Version 15, uses correction level M
        // This type of QR can hold up to 412 binary bytes.
        return 15;
    };
    /**
     * The `getSchema()` method should return an instance
     * of a sub-class of QRCodeDataSchema which describes
     * the QR Code data.
     *
     * @return {QRCodeDataSchema}
     */
    AccountQR.prototype.getSchema = function () {
        return new index_1.ExportAccountDataSchema();
    };
    return AccountQR;
}(index_1.QRCode));
exports.AccountQR = AccountQR;
//# sourceMappingURL=AccountQR.js.map