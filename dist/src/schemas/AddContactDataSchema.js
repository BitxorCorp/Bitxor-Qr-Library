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
 * Class `AddContactDataSchema` describes a contact
 * add QR code data schema.
 *
 * @since 0.3.0
 */
var AddContactDataSchema = /** @class */ (function (_super) {
    __extends(AddContactDataSchema, _super);
    function AddContactDataSchema() {
        return _super.call(this) || this;
    }
    /**
     * The `getData()` method returns an object
     * that will be stored in the `data` field of
     * the underlying QR Code JSON content.
     *
     * @return {any}
     */
    AddContactDataSchema.prototype.getData = function (qr) {
        return {
            "name": qr.name,
            "publicKey": qr.accountPublicKey,
        };
    };
    /**
     * Parse a JSON QR code content into a ContactQR
     * object.
     *
     * @param   json    {string}
     * @return  {ContactQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    AddContactDataSchema.parse = function (json) {
        if (!json.length) {
            throw Error('JSON argument cannot be empty.');
        }
        var jsonObj = JSON.parse(json);
        if (!jsonObj.type || jsonObj.type !== index_1.QRCodeType.AddContact) {
            throw Error('Invalid type field value for ContactQR.');
        }
        // read contact data
        var name = jsonObj.data.name;
        var network = jsonObj.network_id;
        var generationHash = jsonObj.chain_id;
        return new index_1.ContactQR(name, jsonObj.data.publicKey, network, generationHash);
    };
    return AddContactDataSchema;
}(index_1.QRCodeDataSchema));
exports.AddContactDataSchema = AddContactDataSchema;
//# sourceMappingURL=AddContactDataSchema.js.map