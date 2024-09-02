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
var ExportAddressDataSchema_1 = require("./schemas/ExportAddressDataSchema");
var AddressQR = /** @class */ (function (_super) {
    __extends(AddressQR, _super);
    /**
     * Construct a Address QR Code out of the
     * symbol public key.
     *
     * @param name the address name.
     * @param   accountPublicKey         the public key
     * @param   networkType     {INetworkType}
     * @param   generationHash         {string}
     */
    function AddressQR(/**
                 * The address name.
                 * @var {string}
                 */ name, 
    /**
     * The account address.
     */
    accountAddress, 
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
        var _this = _super.call(this, index_1.QRCodeType.ExportAddress, networkType, generationHash) || this;
        _this.name = name;
        _this.accountAddress = accountAddress;
        _this.networkType = networkType;
        _this.generationHash = generationHash;
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
    AddressQR.fromJSON = function (json) {
        // create the QRCode object from JSON
        return ExportAddressDataSchema_1.ExportAddressDataSchema.parse(json);
    };
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @return {number}
     */
    AddressQR.prototype.getTypeNumber = function () {
        // Type version for AddressQR is Version 15, uses correction level M
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
    AddressQR.prototype.getSchema = function () {
        return new ExportAddressDataSchema_1.ExportAddressDataSchema();
    };
    return AddressQR;
}(index_1.QRCode));
exports.AddressQR = AddressQR;
//# sourceMappingURL=AddressQR.js.map