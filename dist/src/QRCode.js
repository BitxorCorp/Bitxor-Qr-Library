"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var canvas_1 = require("canvas");
var QRCodeCanvas = require("qrcode");
var rxjs_1 = require("rxjs");
// internal dependencies
var index_1 = require("../index");
var QRCode = /** @class */ (function () {
    /**
     * Construct a QR Code instance out of its base64
     * representation and type.
     *
     * @param   type    {QRCodeType}
     * @param   base64  {string}
     */
    function QRCode(/**
                 * The QR Code type.
                 * @var {QRCodeType}
                 */ type, 
    /**
     * The network ID.
     * @var {number}
     */
    networkType, 
    /**
     * The network generation hash.
     * @var {string}
     */
    generationHash, 
    /**
     * Whether the data is encrypted
     * @var {boolean}
     */
    encrypted, 
    /**
     * The base64 representation of the QR Code content.
     * @var {string}
     */
    base64) {
        if (encrypted === void 0) { encrypted = false; }
        this.type = type;
        this.networkType = networkType;
        this.generationHash = generationHash;
        this.encrypted = encrypted;
        this.base64 = base64;
    }
    /// end-region Abstract Methods
    /**
     * The `getCorrectionLevel()` method should return the
     * QR Code correction level.
     *
     * Sub-classes may overload this method to provide with
     * a different correction level.
     *
     * @return {number}
     */
    QRCode.prototype.getCorrectionLevel = function () {
        return 'M';
    };
    /**
     * The `toJSON()` method should return the JSON
     * representation of the QR Code content.
     *
     * @return {string}
     */
    QRCode.prototype.toJSON = function () {
        // get the QR Code Data Schema
        var schema = this.getSchema();
        // create the JSON object for this QR Code
        var json = schema.toObject(this);
        // format to JSON
        return JSON.stringify(json);
    };
    /**
     * Generate QRcode image Base64.
     *
     * The returned string can be put in the `src` attribute
     * of a `<img />` tag directly in HTML. The produced image
     * will be a PNG.
     *
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @return  {Observable<string>} Return image data in Base64.
     */
    QRCode.prototype.toBase64 = function (settings) {
        if (settings === void 0) { settings = new index_1.QRCodeSettings(); }
        // get JSON representation
        var json = this.toJSON();
        // get base64 representation
        return rxjs_1.from(QRCodeCanvas.toDataURL(json, {
            errorCorrectionLevel: settings.correctionLevel,
        }));
    };
    /**
     * Generate QRCode as a string. This permits to display SVG
     * format, Terminal format or utf-8 format.
     *
     * @see https://www.npmjs.com/package/qrcode
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @param   {QRCodeTextType}    streamType   (Optional) The QR Code text type, defaults to "terminal"
     * @return  {Observable<string>}
     */
    QRCode.prototype.toString = function (settings, streamType) {
        if (settings === void 0) { settings = new index_1.QRCodeSettings(); }
        if (streamType === void 0) { streamType = index_1.QRCodeStreamType.Terminal; }
        // get JSON representation
        var json = this.toJSON();
        // build the QR Code
        return rxjs_1.from(QRCodeCanvas.toString(json, {
            errorCorrectionLevel: settings.correctionLevel,
            width: settings.widthPixel,
            type: streamType,
        }));
    };
    /**
     * Generate QRCode and return object.
     *
     * @see https://www.npmjs.com/package/qrcode
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @return  {Observable<string>}
     */
    QRCode.prototype.toObject = function (settings) {
        if (settings === void 0) { settings = new index_1.QRCodeSettings(); }
        // get JSON representation
        var json = this.toJSON();
        // build the QR Code
        return rxjs_1.from([QRCodeCanvas.create(json, {
                errorCorrectionLevel: settings.correctionLevel,
            })]);
    };
    /**
     * Generate QRCode to be printed on a `node-canvas`. This
     * is compatible with the browser and node.
     *
     * @see https://www.npmjs.com/package/qrcode
     * @see https://www.npmjs.com/package/canvas
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @return  {Observable<string>}
     */
    QRCode.prototype.toCanvas = function (settings) {
        if (settings === void 0) { settings = new index_1.QRCodeSettings(); }
        // get JSON representation
        var json = this.toJSON();
        // create canvas
        var canvas = canvas_1.createCanvas(250, 250);
        var context = canvas.getContext('2d');
        // build the QR Code
        return rxjs_1.from(QRCodeCanvas.toCanvas(canvas, json, {
            errorCorrectionLevel: settings.correctionLevel,
            width: settings.widthPixel,
        }));
    };
    return QRCode;
}());
exports.QRCode = QRCode;
//# sourceMappingURL=QRCode.js.map