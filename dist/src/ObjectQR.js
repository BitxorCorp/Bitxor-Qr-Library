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
var ObjectQR = /** @class */ (function (_super) {
    __extends(ObjectQR, _super);
    /**
     * Construct a Object QR Code out of the
     * JSON object.
     *
     * @param   object          {Object}
     * @param   networkType     {INetworkType}
     * @param   generationHash         {string}
     */
    function ObjectQR(/**
                 * The object to display
                 * @var {Object}
                 */ object, 
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
        var _this = _super.call(this, index_1.QRCodeType.ExportObject, networkType, generationHash) || this;
        _this.object = object;
        _this.networkType = networkType;
        _this.generationHash = generationHash;
        return _this;
    }
    /**
     * Parse a JSON QR code content into a ObjectQR
     * object.
     *
     * @param   json        {string}
     * @return  {ObjectQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    ObjectQR.fromJSON = function (json) {
        // create the QRCode object from JSON
        return index_1.ExportObjectDataSchema.parse(json);
    };
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @return {number}
     */
    ObjectQR.prototype.getTypeNumber = function () {
        // Type version for ContactQR is Version 10, uses correction level M
        // This type of QR can hold up to 213 bytes of data.
        return 10;
    };
    /**
     * The `getSchema()` method should return an instance
     * of a sub-class of QRCodeDataSchema which describes
     * the QR Code data.
     *
     * @return {QRCodeDataSchema}
     */
    ObjectQR.prototype.getSchema = function () {
        return new index_1.ExportObjectDataSchema();
    };
    return ObjectQR;
}(index_1.QRCode));
exports.ObjectQR = ObjectQR;
//# sourceMappingURL=ObjectQR.js.map