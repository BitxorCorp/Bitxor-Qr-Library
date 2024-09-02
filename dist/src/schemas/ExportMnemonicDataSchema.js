"use strict";
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
 * Class `ExportMnemonicDataSchema` describes an export
 * account QR code data schema.
 *
 * @since 0.3.2
 */
var ExportMnemonicDataSchema = /** @class */ (function (_super) {
    __extends(ExportMnemonicDataSchema, _super);
    function ExportMnemonicDataSchema() {
        return _super.call(this) || this;
    }
    /**
     * The `getData()` method returns an object
     * that will be stored in the `data` field of
     * the underlying QR Code JSON content.
     *
     * @return {any}
     */
    ExportMnemonicDataSchema.prototype.getData = function (qr) {
        if (qr.encrypted) {
            // we will store a password encrypted copy of the mnemonic plain text
            var encryptedData = index_1.EncryptionService.encrypt(qr.mnemonicPlainText, qr.password);
            return {
                "ciphertext": encryptedData.ciphertext,
                "salt": encryptedData.salt,
            };
        }
        else {
            return {
                "plainMnemonic": qr.mnemonicPlainText
            };
        }
    };
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
     * @throws  {Error}     On invalid password.
     */
    ExportMnemonicDataSchema.parse = function (json, password) {
        if (!json.length) {
            throw new Error('JSON argument cannot be empty.');
        }
        var jsonObj = JSON.parse(json);
        if (!jsonObj.type || jsonObj.type !== index_1.QRCodeType.ExportMnemonic) {
            throw new Error('Invalid type field value for MnemonicQR.');
        }
        if (!jsonObj.hasOwnProperty('data')) {
            throw new Error('Missing mandatory property for encrypted payload.');
        }
        try {
            // decrypt mnemonic pass phrase
            var plainTxt = index_1.EncryptedPayload.isDataEncrypted(jsonObj.data) ? index_1.EncryptionService.decrypt(index_1.EncryptedPayload.fromJSON(JSON.stringify(jsonObj.data)), password) : jsonObj.data.plainMnemonic;
            if (!plainTxt) {
                throw new Error('Mnemonic pass phrase is not valid!');
            }
            var network = jsonObj.network_id;
            var generationHash = jsonObj.chain_id;
            return new index_1.MnemonicQR(plainTxt, network, generationHash, password);
        }
        catch (e) {
            throw new Error('Could not parse mnemonic pass phrase.');
        }
    };
    return ExportMnemonicDataSchema;
}(index_1.QRCodeDataSchema));
exports.ExportMnemonicDataSchema = ExportMnemonicDataSchema;
//# sourceMappingURL=ExportMnemonicDataSchema.js.map