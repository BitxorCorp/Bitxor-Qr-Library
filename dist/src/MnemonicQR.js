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
var MnemonicQR = /** @class */ (function (_super) {
    __extends(MnemonicQR, _super);
    /**
     * Construct a Mnemonic Export QR Code out of the
     * MnemonicPassPhrase and Password instances.
     *
     * @param   mnemonic        {string}
     * @param   password        {Password}
     * @param   networkType     {NetworkType}
     * @param   generationHash  {string}
     */
    function MnemonicQR(/**
                 * The mnemonic pass phrase to be exported
                 */ mnemonicPlainText, 
    /**
     * The network type.
     */
    networkType, 
    /**
     * The network generation hash.
     */
    generationHash, 
    /**
     * Optional password for encryption when not provided means non-password-protected
     * @var {string}
     */
    password) {
        var _this = _super.call(this, index_1.QRCodeType.ExportMnemonic, networkType, generationHash, password !== undefined) || this;
        _this.mnemonicPlainText = mnemonicPlainText;
        _this.networkType = networkType;
        _this.generationHash = generationHash;
        _this.password = password;
        return _this;
    }
    /**
     * Parse a JSON QR code content into a MnemonicQR
     * object.
     *
     * @param   json        {string}
     * @param   password    {string=} Optional password
     * @return  {MnemonicQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    MnemonicQR.fromJSON = function (json, password) {
        // create the QRCode object from JSON
        return index_1.ExportMnemonicDataSchema.parse(json, password);
    };
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @see {QRUtil.MAX_LENGTH}
     * @return {number}
     */
    MnemonicQR.prototype.getTypeNumber = function () {
        // Type version for MnemonicQR is Version 20, uses correction level M
        // This type of QR can hold up to 666 binary bytes.
        return 20;
    };
    /**
     * The `getSchema()` method should return an instance
     * of a sub-class of QRCodeDataSchema which describes
     * the QR Code data.
     *
     * @return {QRCodeDataSchema}
     */
    MnemonicQR.prototype.getSchema = function () {
        return new index_1.ExportMnemonicDataSchema();
    };
    return MnemonicQR;
}(index_1.QRCode));
exports.MnemonicQR = MnemonicQR;
//# sourceMappingURL=MnemonicQR.js.map